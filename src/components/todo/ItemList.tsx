import React from 'react'

import TodoForm from '../forms/TodoForm'
import Todo from './Todo'
import { useTodo } from '../../context/todo-context'
import { TodoListContainer } from './styles/TodoList.style'

const ItemsList = (): JSX.Element => {
  const { todos, setTodos } = useTodo()

  const addTodo = (
    id: number,
    text: string,
    isCompleted: boolean,
    todoDate: Date,
    status: string,
    isEdited: boolean
  ): void => {
    const newTodos = [
      ...(todos || []),
      {
        id,
        text,
        isCompleted,
        todoDate,
        status,
        isEdited
      }
    ]
    setTodos(newTodos)
  }

  return (
    <TodoListContainer className="todo-list">
      <div className="title">
        <h1>My Todo List</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="todo">
        {todos &&
          todos.map((todo: any, index: number) => (
            <Todo key={todo.id} index={index} todo={todo} />
          ))}
      </div>
    </TodoListContainer>
  )
}

export default ItemsList
