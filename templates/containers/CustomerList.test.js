// FINAL_START
import React from 'react'
import {render, mount} from 'enzyme'
import {renderToJson, mountToJson} from 'enzyme-to-json'
import getStoreStub from '../store/Customers.stub'
import CustomerList from './CustomerList'
// FINAL_END
// WORKSHOP_START
// you're going to need to import a few things here:
// react, react-test-renderer, ../store/Customers.stub,
// and the ./CustomerList component (which we're testing)
// WORKSHOP_END

test('should render no customers', () => {
  // FINAL_START
  snapshotRenderedCustomerList()
  // FINAL_END
  // WORKSHOP_START
  // create a snapshotRenderedCustomerList function and test the default
  //   behavior by calling it without arguments
  // Then use the resulting component to check the snapshot
  // WORKSHOP_END
})

test('should render customers', () => {
  // FINAL_START
  const {store} = getStoreStub([{name: 'Bob'}, {name: 'Joanna'}])
  snapshotRenderedCustomerList({store})
  // FINAL_END
  // WORKSHOP_START
  // get a store from the stub and initialize it with two customers
  // we need to have the <CustomerList /> component use our stub instead of the singleton store somehow...
  //   We _could_ use Jest's mocking capabilities. Or, we could just alter the CustomerList component to allow you
  //   to specify a store! So go to the CustomerList.js file and add a prop called `store`. Wherever the singleton
  //   `store` is used, use `this.props.store` instead and use defaultProps to have the `store` default to the singleton
  //   `store` (that way actual users of the component don't have to specify the store).
  // Now use the snapshotRenderedCustomerList function you wrote to pass the store as a prop
  // WORKSHOP_END
})

test('should respond to store updates', () => {
  // FINAL_START
  const {store, updateCustomers} = getStoreStub()
  const wrapper = mountCustomerList({store})
  updateCustomers([{name: 'Jill'}, {name: 'Fred'}])
  expect(mountToJson(wrapper)).toMatchSnapshot()
  // FINAL_END
  // WORKSHOP_START
  // get both the store and the updateCustomers from a call to `../store/Customers.stub`
  // render the customer list with the store stub
  // take a snapshot
  // call updateCustomers with a few customers
  // take another snapshot
  // WORKSHOP_END
})

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

// FINAL_START
/**
 * Render the <CustomerList /> and snapshot it
 * @param {Object} props - the props to render with
 */
function snapshotRenderedCustomerList(props) {
  const wrapper = renderCustomerList(props)
  expect(renderToJson(wrapper)).toMatchSnapshot()
}

/**
 * Renders <CustomerList /> with the given props
 * @param {Object} props - the props to render with
 * @return {Object} the rendered wrapper
 */
function renderCustomerList({store = getStoreStub().store} = {}) {
  return render(<CustomerList store={store} />)
}

/**
 * Mounts <CustomerList /> with the given props
 * @param {Object} props - the props to mount with
 * @return {Object} the mounted wrapper
 */
function mountCustomerList({store = getStoreStub().store} = {}) {
  return mount(<CustomerList store={store} />)
}
// FINAL_END
// WORKSHOP_START
// Create a snapshotRenderedCustomerList function that:
// 1. Accepts props
// 2. Creates a component with those props with a call to renderer.create (tip: you may wanna do this in a separate function)
// 3. Asserts on a snapshot of that component with expect(component).toMatchSnapshot()
// WORKSHOP_END
