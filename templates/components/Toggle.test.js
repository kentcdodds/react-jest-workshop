// FINAL_START
import React from 'react'
import {render, mount} from 'enzyme'
import Toggle from './Toggle'
// FINAL_END
// WORKSHOP_START
// you'll need to import react, enzyme's render and mount functions,
// and ./Toggle
// WORKSHOP_END

test('has toggle--off class applied by default', () => {
  // FINAL_START
  const wrapper = renderToggle()
  expect(rootHasClass(wrapper, 'toggle--off')).toBe(true)
  // FINAL_END
  // WORKSHOP_START
  // create a renderToggle function and call that without arguments to get a wrapper with the defaults
  // expect the first child to have the class toggle--off (tip: create rootHasClass(wrapper, className) function)
  // WORKSHOP_END
})

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  // FINAL_START
  const wrapper = renderToggle({initialToggledOn: true})
  expect(rootHasClass(wrapper, 'toggle--on')).toBe(true)
  // FINAL_END
  // WORKSHOP_START
  // use the renderToggle function and call it with {initialToggledOn: true}
  // expect the first child to have the class toggle--on
  // WORKSHOP_END
})

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

// COMMENT_START
// this one isn't working for some reason... Anyone wanna give it a look?
test('changes the class to toggle--on when clicked', () => {
  // FINAL_START
  const wrapper = mountToggle()
  clickButton(wrapper)
  expect(rootHasClass(wrapper, 'toggle--on')).toBe(true)
  // FINAL_END
  // WORKSHOP_START
  // mountToggle with no specified props (just use defaults from your mountToggle function)
  // click the button
  // take a snapshot of the wrapper with mountToJson from enzyme-to-json and verify it looks good
  // WORKSHOP_END
})
// COMMENT_END

// FINAL_START
/**
 * Uses enzyme to mount the Toggle component
 * @param {Object} props - the props to mount the component with
 * @return {Object} - the enzyme wrapper
 */
function mountToggle(props = {}) {
  return mount(
    <Toggle
      onToggle={() => {}}
      children="Toggle Me"
      {...props}
    />
  )
}

/**
 * Uses enzyme to render the Toggle component
 * @param {Object} props - the props to render the component with
 * @return {Object} - the enzyme wrapper
 */
function renderToggle(props = {}) {
  return render(
    <Toggle
      onToggle={() => {}}
      children="Toggle Me"
      {...props}
    />
  )
}

/**
 * finds the button in the given wrapper and simulates a click event
 * @param {Object} wrapper - the enzyme wrapper
 */
function clickButton(wrapper) {
  wrapper.find('button').first().simulate('click')
}

/**
 * Returns whether the root of the given wrapper has the given className
 * @param {Object} wrapper - the wrapper to get the root element from
 * @param {String} className - the class to check for
 * @return {Boolean} whether the root element has the given class
 */
function rootHasClass(wrapper, className) {
  return wrapper.children().first().hasClass(className)
}
// FINAL_END
// WORKSHOP_START
// create a renderToggle function that accepts some props and applies those to a render of the <Toggle /> component
//   you should also provide defaults for any required props
// create a mountToggle function that does basically the same thing except with mount
// Also a clickButton(wrapper) function would be handy to create here as well as both tests will need to do that.
// WORKSHOP_END
