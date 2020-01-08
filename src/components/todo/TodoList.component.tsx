import React from 'react'

import TodoForm from '../forms/TodoForm.component'
import Todo from '../todo/Todo.component'
import { useTodo } from '../../context/todo-context'
import { TodoListContainer } from './TodoList.style'

const TodoList = () => {
  const { todos, setTodos } = useTodo()

  const addTodo = (text: string, isCompleted: boolean) => {
    const newTodos = [...todos, { text, isCompleted }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  console.log(todos)
  return (
    <TodoListContainer className="todo-list">
      <div className="title">
        <h1>Inbox</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="todo">
        {todos &&
          todos.map((todo: any, index: number) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
      </div>
    </TodoListContainer>
  )
}

export default TodoList
