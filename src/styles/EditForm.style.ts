import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const Form = styled.form`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
`

export const Input = styled.input`
  width: 95%;
  height: 24px;
  border: none;
  padding: 2px;
  background-color: #f3f4f7;

  &:focus {
    outline: none;
  }
`

export const EditFormButton = styled(Button)`
  margin-left: 10px;
`

export const InputContainer = styled.div`
  witdh: 100%;
`
