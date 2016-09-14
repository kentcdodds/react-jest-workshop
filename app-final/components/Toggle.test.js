import React from 'react'
import renderer from 'react-test-renderer'

import Toggle from './Toggle'

test('has toggle--off class applied by default', () => {
  throw new Error('this error is on line 7 of Toggle.test.js which is transpiled for tests!')
  snapshotProps()
})

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  snapshotProps({initialToggledOn: true})
})

function snapshotProps(props) {
  const component = renderToggle(props)
  expect(component).toMatchSnapshot()
}

/**
 * Render the <Toggle /> component with enzyme and return the wrapper
 * @param {Object} props={} - the props to apply to the <Toggle /> component
 * @return {Wrapper} - the enzyme wrapper
 */
function renderToggle(props) {
  return renderer.create(<Toggle {...getProps(props)} />)
}

function getProps(props = {}) {
  return {
    onToggle() {},
    children: 'Toggle Me',
    ...props,
  }
}
