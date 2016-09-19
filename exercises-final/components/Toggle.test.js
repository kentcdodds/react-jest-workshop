import React from 'react'
import renderer from 'react-test-renderer'
import Toggle from './Toggle'

test('has toggle--off class applied by default', () => {
  snapshotToggle()
})

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  snapshotToggle({initialToggledOn: true})
})

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
