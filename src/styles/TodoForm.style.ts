import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import Button from '@material-ui/core/Button'

export const TodoFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FormItems = styled.div`
  background-color: rgba(44, 66, 118, 0.06);
  border-color: transparent;
  border-radius: 4px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const EditForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: 'column';
`

export const Input = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  padding: 5px;
  background-color: #f3f4f7;

  &:focus {
    outline: none;
  }
`

export const CalendarSelector = styled(DatePicker)`
  width: 90%;
  height: 24px;
  background-color: #f3f4f7;
  border: none;
  font-style: italic;
  color: grey;
  text-align: center;
`
export const CalendarContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`

export const FormButton = styled(Button)`
  margin-left: 10px;
`

export const EditFormButton = styled(Button)`
  margin-left: 10px;
`

export const InputContainer = styled.div`
  witdh: 100%;
`
