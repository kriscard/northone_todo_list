import React, { useState } from 'react'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import {Form, Input, TodoFormContainer, CalendarSelector } from './TodoForm.style'

interface PropsType {
  addTodo: (value: string, isCompleted: boolean) => void
}

const TodoForm: React.FC<PropsType> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('')
  const [startDate, setStartDate] = useState(new Date())

  const isCompleted = false

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addTodo(value, isCompleted)
    setValue('')
  }

  return (
    <TodoFormContainer className="container">
      <Form onSubmit={handleSubmit}>
        <Input value={value} onChange={(e): void => setValue(e.target.value)} placeholder="Add your todo" />
      </Form>
      <div className='date-picker'>
        |
        <CalendarSelector
          onChange={(date: Date) => setStartDate(date)}
          selected={startDate}
          placeholderText="Select a date"
        />
      </div>
    </TodoFormContainer>
  )
}

export default TodoForm
