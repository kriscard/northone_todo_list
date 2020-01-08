import React from 'react'

import { TodoContainer } from './Todo.style'

interface TodoTypes {
  todo: { text: string; isCompleted: boolean; date: string }
  index: number
  completeTodo: (index: number) => void
  removeTodo: (index: number) => void
}

const Todo: React.FC<TodoTypes> = ({ todo, index, completeTodo, removeTodo }) => (
  <TodoContainer className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  </TodoContainer>
)

export default Todo
