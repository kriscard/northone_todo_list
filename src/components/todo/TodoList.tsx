import React from 'react'

import TodoForm from '../forms/TodoForm'
import Todo from '../todo/Todo'
import { useTodo } from '../../context/todo-context'

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
  return (
    <>
      {todos &&
        todos.map((todo: any, index: number) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
      <TodoForm addTodo={addTodo} />
    </>
  )
}

export default TodoList
