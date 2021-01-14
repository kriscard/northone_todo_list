import React from 'react'
import NewTodoForm from './forms/NewTodoForm'
import Todo from './Todo'
import { useTodo } from '../context/todo-context'
import { Container } from '../styles/ItemList.style'
import { TodoTypes } from '../helpers/types'

const ItemsList: React.FC = (): JSX.Element => {
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
    <Container className="list">
      <div className="title">
        <h1>My Todo List</h1>
      </div>
      <NewTodoForm addTodo={addTodo} />
      <div className="todo">
        {todos &&
          todos.map((todo: TodoTypes, index: number) => (
            <Todo key={todo.id} index={index} todo={todo} />
          ))}
      </div>
    </Container>
  )
}

export default ItemsList
