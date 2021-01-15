import styled from 'styled-components'
import { Inbox } from '@styled-icons/feather/Inbox'

export const Container = styled.div`
  width: 80%;
  padding: 0 24px;
`
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InboxIcon = styled(Inbox)`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`
