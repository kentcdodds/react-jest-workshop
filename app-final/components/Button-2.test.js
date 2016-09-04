import React from 'react'
import {shallow} from 'enzyme'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Button from './Button'

chai.use(chaiEnzyme())

test('styles the button with a background of the context color', () => {
  const wrapper = shallow(<Button>Click Me</Button>, {
    context: {color: 'blue'}
  })
  expect(wrapper).to.have.style('background', 'blue')
})
