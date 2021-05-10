import React from 'react'
import ErrorMessage from '../ErrorMessage'

export default {
  title: 'Shared/ErrorMessage',
  component: ErrorMessage,
}

const Template = (args) => <ErrorMessage {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'Error... ',
  text: 'An error has occured',
}
