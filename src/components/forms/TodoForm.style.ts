import styled from 'styled-components'
import DatePicker from 'react-datepicker'

export const TodoFormContainer = styled.div`
  width: 80%;
  background-color: rgba(44, 66, 118, 0.06);
  border-color: transparent;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Form = styled.form`
  width: 60%;
`

export const Input = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  padding: 5px;
  background-color: #f3f4f7;
`

export const CalendarSelector = styled(DatePicker)`
  width: 100%;
  background-color: #f3f4f7;
  border: none;
  font-style: italic;
  color: grey;
`
