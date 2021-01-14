import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Todo from '../components/Todo'
import ItemList from '../components/ItemList'
import renderer from 'react-test-renderer'
import { TodoProvider } from '../context/todo-context'

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders correctly', () => {
  const key = 100
  const index = 0
  const date = new Date()
  const todo = {
    id: 1,
    text: 'test 1',
    isCompleted: false,
    todoDate: date,
    status: 'pending',
    isEdited: false
  }

  const app = renderer
    .create(
      <TodoProvider>
        <App />
      </TodoProvider>
    )
    .toJSON()
  const itemlist = renderer
    .create(
      <TodoProvider>
        <ItemList />
      </TodoProvider>
    )
    .toJSON()
  const todoComponent = renderer.create(
    <TodoProvider>
      <Todo key={key} index={index} todo={todo} />
    </TodoProvider>
  )

  expect(app).toMatchSnapshot()
  expect(itemlist).toMatchSnapshot()
  expect(todoComponent).toMatchSnapshot()
})
