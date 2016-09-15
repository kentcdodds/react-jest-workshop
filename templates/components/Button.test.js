// FINAL_START
import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'
import Button from './Button'
// FINAL_END
// WORKSHOP_START
// You're going to need react, react-test-renderer, react-stub-context, and ./Button
// WORKSHOP_END

test('styles the button with a background of the context color', () => {
  // FINAL_START
  const ButtonWithContext = stubContext(Button, {color: 'blue'})
  const component = renderer.create(<ButtonWithContext>Click Me</ButtonWithContext>)
  expect(component).toMatchSnapshot()
  // FINAL_END
  // WORKSHOP_START
  // get a new version of the Button component by using stubContext to stub it with the color blue
  // render that component
  // take a snapshot of the result and verify the snapshot
  // WORKSHOP_END
})
