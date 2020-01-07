import React from 'react'
import { useLocalStorageState } from 'react-storage-hooks'

type TodoType = { text: string; isCompleted: boolean }

type TodoContextValue = {
  todos: TodoType[] | null
  // setTodos: ((todos: TodoType[]) => void)
  setTodos: any
}

const TodoContext = React.createContext<TodoContextValue | undefined>(undefined)

type ProviderProps = {
  value?: TodoContextValue
  children: React.ReactNode
}

function TodoProvider(props: ProviderProps): JSX.Element {
  const [todos, setTodos, writeError] = useLocalStorageState('todoList', null)

  const value: TodoContextValue = {
    todos,
    setTodos,
  }

  return (
    <>
      <TodoContext.Provider value={value} {...props} />
      {writeError && <pre>Cannot write to localStorage: {writeError.message}</pre>}
    </>
  )
}

function useTodo(): TodoContextValue {
  const context = React.useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  const { todos, setTodos } = context
  return {
    todos,
    setTodos,
  }
}

export { TodoProvider, useTodo }
export default TodoContext
