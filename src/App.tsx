import React from 'react'

import Todo from './components/todo/Todo'
import './App.css'
import TodoForm from './components/forms/TodoForm'
import { useTodo } from './context/todo-context'

const App: React.FC = () => {
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
    <div className="wrapper">
      <div className="sidebar">test</div>
      <div className="todo-list">
        {todos &&
          todos.map((todo: any, index: number) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="description"></div>
    </div>
  )
}

export default App
