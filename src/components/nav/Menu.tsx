import React from 'react'

import { MenuContent, List, Items, FlexBox } from '../../styles/Menu.style'
import { Status } from '../../styles/Todo.style'
import {
  useTodo,
  filterByPendingStatus,
  filterByDoneStatus,
  clearAllFilters
} from '../../context/todo-context'

const Menu: React.FC = () => {
  const { dispatch } = useTodo()

  return (
    <MenuContent className="nav">
      <List>
        <Items>
          {/* <InboxIcon />*/}
          <FlexBox>
            <h3>Filtered by</h3>
            <Status
              className="status"
              style={{
                backgroundColor: '#ffc15e',
                margin: '10px',
                textAlign: 'center',
                padding: 'auto',
                width: '60%'
              }}
              onClick={(): void => dispatch(filterByPendingStatus('Pending'))}
            >
              Pending
            </Status>
            <Status
              className="status"
              style={{
                backgroundColor: '#56d68b',
                margin: '10px',
                textAlign: 'center',
                width: '60%'
              }}
              onClick={(): void => dispatch(filterByDoneStatus('Done'))}
            >
              Done
            </Status>
            <Status
              className="status"
              style={{
                backgroundColor: '#dddddd',
                margin: '10px',
                textAlign: 'center',
                width: '60%'
              }}
              onClick={(): void => dispatch(clearAllFilters())}
            >
              Clear selection
            </Status>
          </FlexBox>
        </Items>
      </List>
    </MenuContent>
  )
}

export default Menu
