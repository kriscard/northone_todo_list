import React, { useState } from 'react'

import TodoList from './components/todo/TodoList'
import Menu from './components/nav/Menu'
import TodoDescription from './components/todo/TodoDescription'
import { Wrapper, Sidebar, MainContent, Description } from './App.style'

const App: React.FC = () => {
  const [todoId, setTodoId] = useState<number | undefined>(undefined)

  return (
    <Wrapper className="wrapper">
      <Sidebar className="sidebar">
        <Menu />
      </Sidebar>
      <MainContent className="todo-list">
        <TodoList
          onUserClick={(id: number): void => {
            setTodoId(id)
          }}
        />
      </MainContent>
      <Description className="description">
        {todoId && <TodoDescription todoId={todoId} />}
      </Description>
    </Wrapper>
  )
}

export default App
