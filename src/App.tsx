import React from 'react'
import ItemList from './components/ItemList'
import Menu from './components/nav/Menu'
import { Wrapper, Sidebar, MainContent } from './styles/App.style'

const App: React.FC = () => {
  return (
    <Wrapper className="wrapper">
      <Sidebar className="sidebar">
        <Menu />
      </Sidebar>
      <MainContent className="list">
        <ItemList />
      </MainContent>
    </Wrapper>
  )
}

export default App
