import React from 'react'
import TodoList from '../TodoList'
import { wrapper as Wrapper } from '../../../utils/testUtils'

export default {
  title: 'Todos/TodoList',
  component: TodoList,
}

const Template = (args) => (
  <Wrapper>
    <TodoList {...args} />
  </Wrapper>
)

const todosList = [
  {
    checked: true,
    createdAt: 1619894090832,
    text: 'Mow the lawn',
    id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
    updatedAt: 1619902090237,
  },
  {
    checked: false,
    createdAt: 1619894090832,
    text: 'Feed the birds',
    id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
    updatedAt: 1619902090237,
  },
]

export const Basic = Template.bind({})
Basic.args = {
  todos: todosList,
}
