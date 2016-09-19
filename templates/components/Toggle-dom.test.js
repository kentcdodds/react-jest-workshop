// FINAL_START
import React from 'react'
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import Toggle from './Toggle'
// FINAL_END
// WORKSHOP_START
// you'll need to import react, enzyme's mount function,
// enzyme-to-json's mountToJson function, and ./Toggle
// WORKSHOP_END

test('invokes the onToggle prop when clicked', () => {
  // FINAL_START
  const onToggle = jest.fn()
  const wrapper = mountToggle({onToggle})
  clickButton(wrapper)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toBeCalledWith(true)
  // FINAL_END
  // WORKSHOP_START
  // create a mock function of onToggle with jest.fn()
  // create a mountToggle function and call that with {onToggle}
  // take the returned enzyme wrapper and simulate a click event on the button
  // assert that onToggle was called once
  // assert that it was called with `true`
  // WORKSHOP_END
})

test('changes the class to toggle--on when clicked', () => {
  // FINAL_START
  const wrapper = mountToggle()
  clickButton(wrapper)
  expect(mountToJson(wrapper)).toMatchSnapshot()
  // FINAL_END
  // WORKSHOP_START
  // mountToggle with no specified props (just use defaults from your mountToggle function)
  // click the button
  // take a snapshot of the wrapper with mountToJson from enzyme-to-json and verify it looks good
  // WORKSHOP_END
})

// FINAL_START
/**
 * Uses enzyme to mount the Toggle component
 * @param {Object} props - the props to mount the component with
 * @return {Object} - the enzyme wrapper
 */
function mountToggle(props = {}) {
  return mount(
    <Toggle onToggle={() => {}} {...props}>Toggle Me</Toggle>
  )
}

/**
 * finds the button in the given wrapper and simulates a click event
 * @param {Object} wrapper - the enzyme wrapper
 */
function clickButton(wrapper) {
  wrapper.find('button').first().simulate('click')
}
// FINAL_END
// WORKSHOP_START
// create a mountToggle function that accepts some props and applies those to a mount of the <Toggle /> component
//   you should also provide defaults for any required props
// Also a clickButton(wrapper) function would be handy to create here as well as both tests will need to do that.
// WORKSHOP_END
