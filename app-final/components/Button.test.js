import React from 'react'
import renderer from 'react-test-renderer'
import getElementWithContext from 'react-test-context-provider'
import Button from './Button'

test('styles the button with a background of the context color', () => {
  const reactElement = getElementWithContext({color: 'blue'}, <Button>Click Me</Button>)
  const component = renderer.create(reactElement)
  expect(component).toMatchSnapshot()
})
