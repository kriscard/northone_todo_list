import styled from 'styled-components'
import { Done } from '@styled-icons/material/Done'
import { Delete } from '@styled-icons/material/Delete'
import { Pencil } from '@styled-icons/boxicons-solid/Pencil'

export const TodoContainer = styled.div`
  width: 100;
  height: auto;
  border: 1px solid #d8d9e6;
  padding: 24px;
  margin-top: 24px;
  border-radius: 4px;
`

export const TodoItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const TodoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`

export const TodoStatus = styled.div`
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 14px;
  border: none;
  color: #fff;
  font-weight: 600;
  line-height: 18px;
`
export const DateFormat = styled.div`
  font-size: 12px;
  color: grey;
`

export const DoneIcon = styled(Done)`
  height: 20px;
  width: 20px;
`

export const UpdateIcon = styled(Pencil)`
  height: 20px;
  width: 20px;
`

export const DeleteIcon = styled(Delete)`
  height: 20px;
  width: 20px;
`
