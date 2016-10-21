// FINAL_START
import React from 'react'
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import Button from './Button'
// FINAL_END
// WORKSHOP_START
// You're going to need react, mount from enzyme,
// mountToJson from enzyme-to-json, and ./Button
// WORKSHOP_END

test('styles the button with a background of the context color', () => {
  // FINAL_START
  const wrapper = mount(<Button>Click Me</Button>, {
    context: {color: 'blue'}
  })
  expect(mountToJson(wrapper)).toMatchSnapshot()
  // FINAL_END
  // WORKSHOP_START
  // get a new version of the Button component by using stubContext to stub it with the color blue
  // render that component
  // take a snapshot of the result and verify the snapshot
  // WORKSHOP_END
})
