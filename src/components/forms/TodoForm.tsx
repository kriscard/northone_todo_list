import React, { useState } from 'react'

interface PropsType {
  addTodo: (value: string, isCompleted: boolean) => void
}

const TodoForm: React.FC<PropsType> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('')
  const isCompleted = false

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTodo(value, isCompleted)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e): void => setValue(e.target.value)} />
    </form>
  )
}

export default TodoForm
