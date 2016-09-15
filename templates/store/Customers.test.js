test('should start with empty', () => {
  // FINAL_START
  const {store} = setup()
  const customers = store.getCustomers()
  expect(customers.length).toBe(0)
  // FINAL_END
  // WORKSHOP_START
  // get the store from your setup function
  // call getCustomers on it
  // assert that the lenth of customers is 0
  // WORKSHOP_END
})

test('should allow you to set customers and get them', () => {
  // FINAL_START
  const {store} = setup()
  const c0 = {name: 'Bill'}
  const c1 = {name: 'Francine'}
  store.setCustomers([c0, c1])
  const customers = store.getCustomers()
  const [sc0, sc1] = customers
  expect(customers.length).toBe(2)
  expect(c0).toBe(sc0)
  expect(c1).toBe(sc1)
  // FINAL_END
  // WORKSHOP_START
  // get the store
  // create two customers and set the store to them
  // get the customers from the store
  // assert that there are two customers
  // assert that the customers you got are the ones you set
  // WORKSHOP_END
})

test('should allow you to subscribe to the store', () => {
  // FINAL_START
  const {store} = setup()
  const subscriber = jest.fn()
  const unsubscribe = store.subscribe(subscriber)
  store.setCustomers([])
  expect(subscriber).toHaveBeenCalledTimes(1)
  subscriber.mockClear()
  unsubscribe()
  store.setCustomers([])
  expect(subscriber).not.toBeCalled()
  // FINAL_END
  // WORKSHOP_START
  // get the store
  // setup a jest mock function (jest.fn()) for your subscriber
  // subscribe to the store with that function
  // call setCustomers
  // assert your subscriber was called once
  // clear your subscriber mock function (subscriber.mockClear())
  // call the unsubscribe function you got when subscribing
  // call setCustomers
  // assert that your mock function was not called
  // WORKSHOP_END
})

// FINAL_START
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
// FINAL_END
// WORKSHOP_START
// Create a `setup` function:
// clear the require cache with jest.resetModules() so you can require a fresh copy of the store
// require the ./Customers module (note: because it's using `export default`,
//   the store is on the `default` property of what you're requiring)
// return {store}
// WORKSHOP_END
