import React from 'react'
import renderer from 'react-test-renderer'
import getContextProvider from 'react-test-context-provider'
import Button from './Button'

test('styles the button with a background of the context color', () => {
  const component = renderer.create(
    getContextProvider(<Button>Click Me</Button>, {color: 'blue'})
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
