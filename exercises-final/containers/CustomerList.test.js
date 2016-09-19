import React from 'react'
import renderer from 'react-test-renderer'
import getStoreStub from '../store/Customers.stub'
import CustomerList from './CustomerList'

test('should render no customers', () => {
  snapshotCustomerList()
})

test('should render customers', () => {
  const {store} = getStoreStub([{name: 'Bob'}, {name: 'Joanna'}])
  snapshotCustomerList({store})
})

test('should respond to store updates', () => {
  const {store, updateCustomers} = getStoreStub()
  const component = renderCustomerList({store})
  expect(component).toMatchSnapshot()
  updateCustomers([{name: 'Jill'}, {name: 'Fred'}])
  expect(component).toMatchSnapshot()
})

/**
 * Render the <CustomerList /> and snapshot it
 * @param {Object} props - the props to render with
 */
function snapshotCustomerList(props = {}) {
  const component = renderCustomerList(props)
  expect(component).toMatchSnapshot()
}

/**
 * Renders <CustomerList /> with the given props
 * @param {Object} props - the props to render with
 * @return {Object} the rendered component
 */
function renderCustomerList({store = getStoreStub().store}) {
  return renderer.create(<CustomerList store={store} />)
}
