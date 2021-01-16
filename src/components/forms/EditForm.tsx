import React, { useState } from 'react'

import {
  Form,
  Input,
  EditFormButton,
  InputContainer
} from '../../styles/EditForm.style'
import { useTodo, updateTodo } from '../../context/todo-context'
import { EditFormProps } from '../../helpers/types'

const EditForm = ({ currentTodo }: EditFormProps): JSX.Element => {
  const { todos, dispatch } = useTodo()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const index = todos.indexOf(currentTodo)
    dispatch(updateTodo(index, title, description))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          value={title}
          onChange={(e): void => setTitle(e.target.value)}
          placeholder="Edit your title"
        />
        <Input
          value={description}
          onChange={(e): void => setDescription(e.target.value)}
          placeholder="Edit your description"
        />
      </InputContainer>
      <EditFormButton
        variant="text"
        color="primary"
        style={{ margin: 0, padding: 0 }}
        type="submit"
      >
        Update
      </EditFormButton>
    </Form>
  )
}

export default EditForm
