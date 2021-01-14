import React from 'react'
import dayjs from 'dayjs'

import EditForm from '../forms/EditForm'
import { useTodo } from '../../context/todo-context'
import {
  TodoContainer,
  TodoItems,
  TodoInfo,
  TodoStatus,
  DateFormat,
  DoneIcon,
  UpdateIcon,
  DeleteIcon
} from './styles/Todo.style'

interface TodoTypes {
  todo: {
    id: number
    text: string
    isCompleted: boolean
    todoDate: string
    status: string
    isEdited: boolean
  }
  index: number
}

const Todo = ({ todo, index }: TodoTypes): JSX.Element => {
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
    <TodoContainer className="todo">
      <TodoItems className="todo__title">
        {todo.isEdited ? <EditForm currentTodo={todo} /> : todo.text}
        <TodoInfo className="todo__info">
          <DateFormat className="todo__date">
            {dayjs(todo.todoDate).format('MMM D')}
          </DateFormat>
          <TodoStatus
            className="status"
            style={
              todo.status === 'Pending'
                ? { backgroundColor: '#ffc15e' }
                : { backgroundColor: '#56d68b' }
            }
          >
            {todo.status}
          </TodoStatus>
          <DoneIcon onClick={(): void => completeTodo()} />
          <UpdateIcon onClick={(): void => editTodo()} />
          <DeleteIcon onClick={(): void => removeTodo(index)} />
        </TodoInfo>
      </TodoItems>
    </TodoContainer>
  )
}

export default Todo
