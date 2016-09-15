test('should start with empty', () => {
  // get the store from your setup function
  // call getCustomers on it
  // assert that the lenth of customers is 0
})

test('should allow you to set customers and get them', () => {
  // get the store
  // create two customers and set the store to them
  // get the customers from the store
  // assert that there are two customers
  // assert that the customers you got are the ones you set
})

test('should allow you to subscribe to the store', () => {
  // get the store
  // setup a jest mock function (jest.fn()) for your subscriber
  // subscribe to the store with that function
  // call setCustomers
  // assert your subscriber was called once
  // clear your subscriber mock function (subscriber.mockClear())
  // call the unsubscribe function you got when subscribing
  // call setCustomers
  // assert that your mock function was not called
})

// Create a `setup` function:
// clear the require cache with jest.resetModules() so you can require a fresh copy of the store
// require the ./Customers module (note: because it's using `export default`,
//   the store is on the `default` property of what you're requiring)
// return {store}
