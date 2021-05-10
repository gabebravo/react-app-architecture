import React from 'react'
import InfoMessage from '../InfoMessage'

export default {
  title: 'Shared/InfoMessage',
  component: InfoMessage,
}

const Template = (args) => <InfoMessage {...args} />

export const Basic = Template.bind({})
Basic.args = {
  message: 'This is an info message',
}
