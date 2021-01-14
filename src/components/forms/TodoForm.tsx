import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import {
  Form,
  Input,
  TodoFormContainer,
  CalendarSelector
} from './TodoForm.style'

interface PropsType {
  addTodo: (
    value: string,
    isCompleted: boolean,
    todoDate: Date,
    status: string,
    description: string
  ) => void
  isUserEditTodo: boolean
}

const TodoForm = ({ addTodo, isUserEditTodo }: PropsType): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [startDate, setStartDate] = useState(new Date())

  const isCompleted = false
  const todoDate = startDate
  const status = 'Pending'
  const description = ''

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTodo(value, isCompleted, todoDate, status, description)
    setValue('')
  }

  if (isUserEditTodo) {
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={(e): void => setValue(e.target.value)}
          placeholder="Edit your todo"
        />
      </Form>
    )
  }

  return (
    <TodoFormContainer className="container">
      <Form onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={(e): void => setValue(e.target.value)}
          placeholder="Add your todo"
        />
      </Form>
      <div className="date-picker">
        |
        <CalendarSelector
          onChange={(date: Date): void => {
            setStartDate(date)
          }}
          selected={startDate}
          placeholderText="Select a date"
        />
      </div>
    </TodoFormContainer>
  )
}

export default TodoForm
