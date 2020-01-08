import React from 'react';

import {
  MenuContent, List, Items, InboxIcon,
} from './Menu.style';

const Menu: React.FC = () => (
  <MenuContent className="nav">
    <List>
      <Items>
        <InboxIcon />
          Inbox
      </Items>
    </List>
  </MenuContent>
);

export default Menu;
