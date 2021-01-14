import React from 'react'

import TodoForm from '../forms/TodoForm'
import Todo from './Todo'
import { useTodo } from '../../context/todo-context'
import { TodoListContainer } from './styles/TodoList.style'

interface PropsType {
  onUserClick: (todoId: number) => void
}

const TodoList = ({ onUserClick }: PropsType): JSX.Element => {
  const { todos, setTodos } = useTodo()

  const addTodo = (
    text: string,
    isCompleted: boolean,
    todoDate: Date,
    status: string,
    description: string
  ): void => {
    const newTodos = [
      ...(todos || []),
      {
        text,
        isCompleted,
        todoDate,
        status,
        description
      }
    ]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const allTodos = [...todos]
    allTodos[index].isCompleted = true
    allTodos[index].status = 'Done'
    setTodos(allTodos)
  }

  const removeTodo = (index: number): void => {
    const allTodos = [...todos]
    allTodos.splice(index, 1)
    setTodos(allTodos)
  }

  return (
    <TodoListContainer className="todo-list">
      <div className="title">
        <h1>Inbox</h1>
      </div>
      <TodoForm addTodo={addTodo} isUserEditTodo={false} />
      <div className="todo">
        {todos &&
          todos.map((todo: any, index: number) => (
            <Todo
              key={todo.text}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              onUserClick={onUserClick}
            />
          ))}
      </div>
    </TodoListContainer>
  )
}

export default TodoList
