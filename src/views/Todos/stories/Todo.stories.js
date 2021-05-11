import React from 'react'
import Todo from '../Todo'
import { wrapper as Wrapper } from '../../../utils/testUtils'

export default {
  title: 'Todos/Todo',
  component: Todo,
}

const Template = (args) => (
  <Wrapper>
    <Todo {...args} />
  </Wrapper>
)

const mowTheLawn = {
  checked: true,
  createdAt: 1619894090832,
  text: 'Mow the lawn',
  id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
  updatedAt: 1619902090237,
}

export const Basic = Template.bind({})
Basic.args = {
  todo: mowTheLawn,
}
