import React from 'react'

import TodoList from './components/todo/TodoList'
import Menu from './components/nav/Menu.component'
import { Wrapper, Sidebar, MainContent, Description } from './App.style'

const App: React.FC = () => (
  <Wrapper className="wrapper">
    <Sidebar className="sidebar">
      <Menu/>
    </Sidebar>
    <MainContent className="todo-list">
      <TodoList />
    </MainContent>
    <Description className="description"></Description>
  </Wrapper>
)

export default App
