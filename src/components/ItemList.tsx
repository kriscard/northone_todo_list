import React from 'react'
import NewTodoForm from './forms/NewTodoForm'
import Todo from './Todo'
import { useTodo } from '../context/todo-context'
import { Container, Title, InboxIcon } from '../styles/ItemList.style'
import { TodoTypes } from '../helpers/types'

const ItemsList: React.FC = (): JSX.Element => {
  const { todos } = useTodo()
  const todosIsFiltered = todos.filter((todo) => todo.isFiltered)

  return (
    <Container className="list">
      <Title className="title">
        <InboxIcon />
        <h1>Inbox</h1>
      </Title>
      <NewTodoForm />
      <div className="todo">
        {todosIsFiltered.length > 0
          ? todosIsFiltered.map((todo: TodoTypes, index: number) => {
              return <Todo key={todo.id} index={index} todo={todo} />
            })
          : todos &&
            todos.map((todo: TodoTypes, index: number) => {
              return <Todo key={todo.id} index={index} todo={todo} />
            })}
      </div>
    </Container>
  )
}

export default React.memo(ItemsList)
