import styled from 'styled-components';
import { Inbox } from 'styled-icons/feather/Inbox';

export const MenuContent = styled.div`
  height: 100%;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 10px;
`;

export const Items = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InboxIcon = styled(Inbox)`
  height: 30px;
  width: 30px;
  margin-right: 5px;
`;
