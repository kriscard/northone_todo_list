import React, { useState } from 'react'

import { Form, Input } from '../../styles/TodoForm.style'
import { useTodo, updateTodo } from '../../context/todo-context'
import { EditFormProps } from '../../helpers/types'

const EditForm = ({ currentTodo }: EditFormProps): JSX.Element => {
  const { todos, dispatch } = useTodo()
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const index = todos.indexOf(currentTodo)
    dispatch(updateTodo(index, value))
  }

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

export default EditForm
