// FINAL_START
import React from 'react'
import {mount} from 'enzyme'
import getStoreStub from '../store/Customers.stub'
import CustomerList from './CustomerList'
// FINAL_END
// WORKSHOP_START
// you're going to need to import a few things here:
// react, enzyme, ../store/Customers.stub,
// and the ./CustomerList component (which we're testing)
// WORKSHOP_END

test('unsubscribe when unmounted', () => {
  // FINAL_START
  const {unsubscribe, store} = getStoreStub()
  const wrapper = mount(<CustomerList store={store} />)
  wrapper.unmount()
  expect(unsubscribe).toHaveBeenCalledTimes(1)
  // FINAL_END
  // WORKSHOP_START
  // we want to make sure that the unsubscribe function is called on the store
  // so get the store stub and the unsubscribe mock function from '../store/Customers.stub'
  // Then use enzyme's `mount` function to mount `./CustomerList` with the store stub.
  // Take the resulting wrapper from that `mount` and unmount it by calling `wrapper.unmount`
  // Then assert that the `unsubscribe` mock was called once with toHaveBeenCalledTimes(1)
  // WORKSHOP_END
})
