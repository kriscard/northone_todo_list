import React from 'react'

interface TodoTypes {
  todo: { text: string; isCompleted: boolean }
  index: number
  completeTodo: (index: number) => void
  removeTodo: (index: number) => void
}

const Todo: React.FC<TodoTypes> = ({ todo, index, completeTodo, removeTodo }) => (
  <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  </div>
)

export default Todo
