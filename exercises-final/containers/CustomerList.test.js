import React from 'react'
import {render, mount} from 'enzyme'
import {renderToJson, mountToJson} from 'enzyme-to-json'
import getStoreStub from '../store/Customers.stub'
import CustomerList from './CustomerList'

test('should render no customers', () => {
  snapshotRenderedCustomerList()
})

test('should render customers', () => {
  const {store} = getStoreStub([{name: 'Bob'}, {name: 'Joanna'}])
  snapshotRenderedCustomerList({store})
})

test('should respond to store updates', () => {
  const {store, updateCustomers} = getStoreStub()
  const wrapper = mountCustomerList({store})
  updateCustomers([{name: 'Jill'}, {name: 'Fred'}])
  expect(mountToJson(wrapper)).toMatchSnapshot()
})

test('unsubscribe when unmounted', () => {
  const {unsubscribe, store} = getStoreStub()
  const wrapper = mount(<CustomerList store={store} />)
  wrapper.unmount()
  expect(unsubscribe).toHaveBeenCalledTimes(1)
})

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
