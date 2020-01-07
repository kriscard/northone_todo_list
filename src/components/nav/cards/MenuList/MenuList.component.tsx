import React from 'react'

import { List, Items, CalendarIcon, InboxIcon } from './MenuList.style'

const MenuList = () => (
  <List>
    <Items>
      <CalendarIcon />
      Today
    </Items>
    <Items>
      <CalendarIcon />
      Next 7 days
    </Items>
    <Items>
      <InboxIcon />
      Inbox
    </Items>
  </List>
)

export default MenuList
