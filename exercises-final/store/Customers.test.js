test('should start with empty', () => {
  const {store} = setup()
  const customers = store.getCustomers()
  expect(customers.length).toBe(0)
})

test('should allow you to set customers and get them', () => {
  const {store} = setup()
  const c0 = {name: 'Bill'}
  const c1 = {name: 'Francine'}
  store.setCustomers([c0, c1])
  const customers = store.getCustomers()
  const [sc0, sc1] = customers
  expect(customers.length).toBe(2)
  expect(c0).toBe(sc0)
  expect(c1).toBe(sc1)
})

test('should allow you to subscribe to the store', () => {
  const {store} = setup()
  const subscriber = jest.fn()
  const unsubscribe = store.subscribe(subscriber)
  store.setCustomers([])
  expect(subscriber).toHaveBeenCalledTimes(1)
  subscriber.mockClear()
  unsubscribe()
  store.setCustomers([])
  expect(subscriber).not.toBeCalled()
})

/**
 * Prepares our environment for an individual test and returns whatever is needed for that test to run.
 * @return {Object} what is needed for tests to run. In this case it is only a fresh copy of the store
 */
function setup() {
  // clear the require cache so when we require the store we get a fresh copy
  jest.resetModules()
  const store = require('./Customers').default
  return {store}
}
