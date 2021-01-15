import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useTodo, addTodo } from '../../context/todo-context'

import {
  Form,
  Input,
  TodoFormContainer,
  CalendarSelector
} from '../../styles/TodoForm.style'

const NewTodoForm = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const { dispatch } = useTodo()
  const [startDate, setStartDate] = useState(new Date())

  const id = Math.floor(Math.random() * 1000) + 1
  const isCompleted = false
  const todoDate = startDate
  const status = 'Pending'
  const isEdited = false
  const isFiltered = false
  const isFilteredBy = ''

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = value
    const newTodo = {
      id,
      text,
      isCompleted,
      todoDate,
      status,
      isEdited,
      isFiltered,
      isFilteredBy
    }
    dispatch(addTodo(newTodo))
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
