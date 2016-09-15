// FINAL_START
import React from 'react'
import renderer from 'react-test-renderer'
import Toggle from './Toggle'
// FINAL_END
// WORKSHOP_START
// you'll need to import react, react-test-renderer, and ./Toggle
// WORKSHOP_END

test('has toggle--off class applied by default', () => {
  // FINAL_START
  snapshotToggle()
  // FINAL_END
  // WORKSHOP_START
  // create a snapshotToggle function and call that without arguments to see the default.
  // WORKSHOP_END
})

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  // FINAL_START
  snapshotToggle({initialToggledOn: true})
  // FINAL_END
  // WORKSHOP_START
  // use the snapshotToggle function and call it with {initialToggledOn: true}
  // WORKSHOP_END
})

// FINAL_START
/**
 * Render the <Toggle /> and snapshot it
 * @param {Object} props - the props to render with
 */
function snapshotToggle(props) {
  const component = renderToggle(props)
  expect(component).toMatchSnapshot()
}

/**
 * Render the <Toggle /> component
 * @param {Object} props={} - the props to apply to the <Toggle /> component
 * @return {Object} - the rendered component
 */
function renderToggle(props = {}) {
  return renderer.create(
    <Toggle onToggle={() => {}} {...props}>Toggle Me</Toggle>
  )
}
// FINAL_END
// WORKSHOP_START
// create a snapshotToggle function that renders the toggle component with some defaults and takes a snapshot
// WORKSHOP_END
