import React from 'react'
import {mount} from 'enzyme'
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
  expect(wrapper.html()).toMatchSnapshot()
})

function mountToggle(props) {
  return mount(<Toggle {...getProps(props)} />)
}

function getProps(props = {}) {
  return {
    onToggle() {},
    children: 'Toggle Me',
    ...props,
  }
}

function clickButton(wrapper) {
  wrapper.find('button').first().simulate('click')
}
