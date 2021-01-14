import React from 'react'

import ItemList from './components/todo/ItemList'
import Menu from './components/nav/Menu'
import { Wrapper, Sidebar, MainContent } from './App.style'

const App: React.FC = () => {
  return (
    <Wrapper className="wrapper">
      <Sidebar className="sidebar">
        <Menu />
      </Sidebar>
      <MainContent className="todo-list">
        <ItemList />
      </MainContent>
    </Wrapper>
  )
}

export default App
