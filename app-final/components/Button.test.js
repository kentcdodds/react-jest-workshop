import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'
import Button from './Button'

test('styles the button with a background of the context color', () => {
  const ButtonWithContext = stubContext(Button, {color: 'blue'})
  const component = renderer.create(<ButtonWithContext>Click Me</ButtonWithContext>)
  expect(component).toMatchSnapshot()
})
