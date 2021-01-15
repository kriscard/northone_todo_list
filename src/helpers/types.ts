export interface TodoTypes {
  id: number
  text: string
  isCompleted: boolean
  todoDate: Date
  status: string
  isEdited?: boolean
  isFiltered: boolean
  isFilteredBy: string
}

export interface TodoContextValue {
  todos: TodoTypes[]
  dispatch: React.Dispatch<Actions>
}

export interface TodoProps {
  todo: TodoTypes
  index: number
}

export interface EditFormProps {
  currentTodo: TodoTypes
}

export type ProviderProps = {
  value?: TodoContextValue
  children: React.ReactNode
}

export type Actions = Record<string, any>
