import styled from 'styled-components'
import { Calendar } from 'styled-icons/boxicons-regular/Calendar'
import { Inbox } from 'styled-icons/feather/Inbox'

export const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 10px;
`

export const Items = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const CalendarIcon = styled(Calendar)`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`

export const InboxIcon = styled(Inbox)`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`
