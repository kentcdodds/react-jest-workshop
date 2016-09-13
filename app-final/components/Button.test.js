import React from 'react'
import renderer from 'react-test-renderer'
import getContextProvider from 'react-test-context-provider'
import Button from './Button'

test('styles the button with a background of the context color', () => {
  const getElementWithBlueColorContext = getContextProvider({color: 'blue'})
  const element = getElementWithBlueColorContext(<Button>Click Me</Button>)
  const component = renderer.create(element)
  expect(component).toMatchSnapshot()
})
