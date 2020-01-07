import React from 'react'

import { MenuContent } from './Menu.style'
import MenuList from './cards/MenuList/MenuList.component'

const Menu: React.FC = () => {
  return (
    <MenuContent className="nav">
      <MenuList />
    </MenuContent>
  )
}

export default Menu
