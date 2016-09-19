import React from 'react'
import {mount} from 'enzyme'
import {mountToJson} from 'enzyme-to-json'
import Toggle from './Toggle'

test('invokes the onToggle prop when clicked', () => {
  const onToggle = jest.fn()
  const wrapper = mountToggle({onToggle})
  clickButton(wrapper)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toBeCalledWith(true)
})

test('changes the class to toggle--on when clicked', () => {
  const wrapper = mountToggle()
  clickButton(wrapper)
  expect(mountToJson(wrapper)).toMatchSnapshot()
})

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
