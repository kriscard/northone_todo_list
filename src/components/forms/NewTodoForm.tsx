import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useTodo, addTodo } from '../../context/todo-context'

import {
  Form,
  Input,
  TodoFormContainer,
  CalendarSelector,
  CalendarContainer,
  FormButton,
  InputContainer,
  FormItems
} from '../../styles/TodoForm.style'

const NewTodoForm = (): JSX.Element => {
  const [todoTitle, setTodoTitle] = useState<string>('')
  const [todoDescription, setTodoDescription] = useState<string>('')
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
    const title = todoTitle
    const description = todoDescription
    const newTodo = {
      id,
      title,
      isCompleted,
      todoDate,
      status,
      isEdited,
      isFiltered,
      isFilteredBy,
      description
    }
    dispatch(addTodo(newTodo))
    setTodoTitle('')
    setTodoDescription('')
  }

  return (
    <TodoFormContainer className="container">
      <Form onSubmit={handleSubmit}>
        <FormItems>
          <InputContainer>
            <Input
              value={todoTitle}
              key="todo-title"
              onChange={(e): void => setTodoTitle(e.target.value)}
              placeholder="Add your title"
            />
            <Input
              value={todoDescription}
              key="todo-description"
              onChange={(e): void => setTodoDescription(e.target.value)}
              placeholder="Add your description"
            />
          </InputContainer>
          <CalendarContainer className="date-picker">
            |
            <CalendarSelector
              onChange={(date: Date): void => {
                setStartDate(date)
              }}
              selected={startDate}
              placeholderText="Select a date"
            />
          </CalendarContainer>
        </FormItems>
        <FormButton variant="contained" color="primary" type="submit">
          Add
        </FormButton>
      </Form>
    </TodoFormContainer>
  )
}

export default NewTodoForm
