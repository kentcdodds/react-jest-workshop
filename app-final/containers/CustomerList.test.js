import React from 'react'
import renderer from 'react-test-renderer'
import getStoreStub from '../store/Customers.stub'

import CustomerList from './CustomerList'

test('should render no customers', () => {
  const component = renderCustomerList()
  expect(component).toMatchSnapshot()
})

test('should render customers', () => {
  const {store} = getStoreStub([{name: 'Bob'}, {name: 'Joanna'}])
  const component = renderCustomerList({store})
  expect(component).toMatchSnapshot()
})

test('should respond to store updates', () => {
  const {store, updateCustomers} = getStoreStub()
  const component = renderCustomerList({store})
  expect(component).toMatchSnapshot()
  updateCustomers([{name: 'Jill'}, {name: 'Fred'}])
  expect(component).toMatchSnapshot()
})

/**
 * Render the <CustomerList /> component with enzyme and return the wrapper
 * @param {Object} props={} - the props to apply to the <CustomerList /> component
 * @return {Wrapper} - the enzyme wrapper
 */
function renderCustomerList(props = {}) {
  return renderer.create(<CustomerList {...getProps(props)} />)
}

/**
 * Get the default props for tests
 * @param {Object} props={} the props to apply to the <CustomerList /> component
 * @return {Object} store, actions, and the props you've passed (overwriting the store and actions)
 */
function getProps(props = {}) {
  const {store} = getStoreStub()
  return {store, ...props}
}
