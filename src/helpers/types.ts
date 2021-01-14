export interface TodoTypes {
  id: number
  text: string
  isCompleted: boolean
  todoDate: Date
  status: string
  isEdited?: boolean
}

export interface TodoContextValue {
  todos: TodoTypes[]
  setTodos: any
}

export interface TodoProps {
  todo: TodoTypes
  index: number
}

export interface EditFormProps {
  currentTodo: TodoTypes
}
