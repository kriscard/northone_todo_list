import React from 'react'
import dayjs from 'dayjs'

import EditForm from './forms/EditForm'
import { useTodo } from '../context/todo-context'
import { TodoProps } from '../helpers/types'
import {
  Container,
  Items,
  Info,
  Status,
  DateFormat,
  DoneIcon,
  UpdateIcon,
  DeleteIcon
} from '../styles/Todo.style'

const Todo = ({ todo, index }: TodoProps): JSX.Element => {
  const { todos, setTodos } = useTodo()
  const allTodos = [...todos]

  const completeTodo = (): void => {
    todo.isCompleted = true
    todo.status = 'Done'
    setTodos(allTodos)
  }

  const editTodo = (): void => {
    todo.isEdited = true
    setTodos(allTodos)
  }

  const removeTodo = (index: number): void => {
    allTodos.splice(index, 1)
    setTodos(allTodos)
  }

  return (
    <Container className="todo">
      <Items className="title">
        {todo.isEdited ? <EditForm currentTodo={todo} /> : todo.text}
        <Info className="info">
          <DateFormat className="todo-date">
            {dayjs(todo.todoDate).format('MMM D')}
          </DateFormat>
          <Status
            className="status"
            style={
              todo.status === 'Pending'
                ? { backgroundColor: '#ffc15e' }
                : { backgroundColor: '#56d68b' }
            }
          >
            {todo.status}
          </Status>
          <DoneIcon onClick={(): void => completeTodo()} />
          <UpdateIcon onClick={(): void => editTodo()} />
          <DeleteIcon onClick={(): void => removeTodo(index)} />
        </Info>
      </Items>
    </Container>
  )
}

export default Todo
