import React from 'react'
import {mount} from 'enzyme'
import {spy} from 'sinon'

import Toggle from './Toggle'


test('invokes the onToggle prop when clicked', () => {
  const onToggle = spy()
  const wrapper = mountToggle({onToggle})
  clickButton(wrapper)

  expect(onToggle.calledOnce)
  expect(onToggle.calledWith(true))
})

test('changes the class when clicked', () => {
  const wrapper = mountToggle()
  clickButton(wrapper)
  expect(wrapper.html()).toContain('toggle--on')
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
