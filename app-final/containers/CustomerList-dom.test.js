import React from 'react'
import {mount} from 'enzyme'
import getStoreStub from '../store/Customers.stub'
import CustomerList from './CustomerList'

test('unsubscribe when unmounted', () => {
  const {unsubscribe, store} = getStoreStub()
  const wrapper = mount(<CustomerList store={store} />)
  wrapper.unmount()
  expect(unsubscribe.mock.calls.length).toBe(1)
})
