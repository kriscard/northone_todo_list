import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import {
  Form,
  Input,
  TodoFormContainer,
  CalendarSelector
} from '../../styles/TodoForm.style'

interface PropsType {
  addTodo: (
    id: number,
    value: string,
    isCompleted: boolean,
    todoDate: Date,
    status: string,
    isEdited: boolean
  ) => void
}

const NewTodoForm = ({ addTodo }: PropsType): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [startDate, setStartDate] = useState(new Date())

  const id = Math.floor(Math.random() * 1000) + 1
  const isCompleted = false
  const todoDate = startDate
  const status = 'Pending'
  const isEdited = false

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTodo(id, value, isCompleted, todoDate, status, isEdited)
    setValue('')
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

export default NewTodoForm
