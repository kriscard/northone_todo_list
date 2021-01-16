import React, { Reducer } from 'react'
import { useStorageReducer } from 'react-storage-hooks'
import {
  TodoContextValue,
  ProviderProps,
  Actions,
  TodoTypes
} from '../helpers/types'

const TodoContext = React.createContext<TodoContextValue | undefined>(undefined)

// Actions
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS'
export const FILTER_BY_PENDING_STATUS = 'FILTER_BY_PENDING_STATUS'
export const FILTER_BY_DONE_STATUS = 'FILTER_BY_DONE_STATUS'

// Actions creators
export function addTodo(todo: TodoTypes): Actions {
  return { type: ADD_TODO, todo }
}

export function removeTodo(index: number): Actions {
  return { type: REMOVE_TODO, index }
}
export function completeTodo(index: number): Actions {
  return { type: COMPLETE_TODO, index }
}
export function editTodo(index: number): Actions {
  return { type: EDIT_TODO, index }
}
export function updateTodo(
  index: number,
  title: string,
  description: string
): Actions {
  return { type: UPDATE_TODO, index, title, description }
}
export function clearAllFilters(): Actions {
  return { type: CLEAR_ALL_FILTERS }
}
export function filterByPendingStatus(status: string): Actions {
  return { type: FILTER_BY_PENDING_STATUS, status }
}
export function filterByDoneStatus(status: string): Actions {
  return { type: FILTER_BY_DONE_STATUS, status }
}

// Reducer
export function todoReducer(
  todos: TodoTypes[],
  action: Record<string, any>
): Reducer<TodoTypes[], Actions> | (string | TodoTypes)[] {
  const copy = [...todos]
  const todosInPending = copy.filter((todo) => todo.status === 'Pending')
  const todosInDone = copy.filter((todo) => todo.status === 'Done')

  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.todo]
    case COMPLETE_TODO:
      const completedTodo: TodoTypes = todos[action.index]
      completedTodo.isCompleted = true
      completedTodo.status = 'Done'
      return [...todos]
    case EDIT_TODO:
      const todoToEdit: TodoTypes = todos[action.index]
      todoToEdit.isEdited = true
      const uniqTodos = [...new Set(todos)]
      return [...uniqTodos]
    case UPDATE_TODO:
      const updatedTodo: TodoTypes = todos[action.index]
      updatedTodo.title = action.title
      updatedTodo.description = action.description
      updatedTodo.isEdited = false
      return [...todos]
    case REMOVE_TODO:
      copy.splice(action.index, 1)
      return copy
    case CLEAR_ALL_FILTERS:
      copy.map((todo) => {
        todo.isFiltered = false
        todo.isFilteredBy = ''
      })
      return [...copy]
    case FILTER_BY_PENDING_STATUS:
      todosInPending.map((todo) => {
        todo.isFiltered = true
        todo.isFilteredBy = 'Pending'
      })
      todosInDone.map((todo) => {
        todo.isFiltered = false
        todo.isFilteredBy = ''
      })
      return [...todos]
    case FILTER_BY_DONE_STATUS:
      todosInDone.map((todo) => {
        todo.isFiltered = true
        todo.isFilteredBy = 'Done'
      })
      todosInPending.map((todo) => {
        todo.isFiltered = false
        todo.isFilteredBy = ''
      })
      return [...todos]
    default:
      return todos
  }
}

function TodoProvider(props: ProviderProps): JSX.Element {
  const [todos, dispatch, writeError] = useStorageReducer(
    localStorage,
    'todos',
    todoReducer as Reducer<TodoTypes[], Actions>,
    []
  )

  const value = {
    todos,
    dispatch
  }

  return (
    <>
      <TodoContext.Provider value={value} {...props} />
      {writeError && (
        <pre>
          Cannot write to localStorage:
          {writeError.message}
        </pre>
      )}
    </>
  )
}

function useTodo(): TodoContextValue {
  const context = React.useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  const { todos, dispatch } = context
  return {
    todos,
    dispatch
  }
}

export { TodoProvider, useTodo }
export default TodoContext
