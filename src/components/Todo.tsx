import React from 'react'
import dayjs from 'dayjs'

import EditForm from './forms/EditForm'
import {
  completeTodo,
  useTodo,
  removeTodo,
  editTodo
} from '../context/todo-context'
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
  const { dispatch } = useTodo()

  return (
    <Container className="todo">
      <Items className="title">
        {todo.isEdited ? (
          <EditForm currentTodo={todo} />
        ) : (
          <div>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        )}
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
          <DoneIcon onClick={(): void => dispatch(completeTodo(index))} />
          <UpdateIcon onClick={(): void => dispatch(editTodo(index))} />
          <DeleteIcon onClick={(): void => dispatch(removeTodo(index))} />
        </Info>
      </Items>
    </Container>
  )
}

export default Todo
