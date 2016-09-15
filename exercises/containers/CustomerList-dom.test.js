// you're going to need to import a few things here:
// react, enzyme, ../store/Customers.stub,
// and the ./CustomerList component (which we're testing)

test('unsubscribe when unmounted', () => {
  // we want to make sure that the unsubscribe function is called on the store
  // so get the store stub and the unsubscribe mock function from '../store/Customers.stub'
  // Then use enzyme's `mount` function to mount `./CustomerList` with the store stub.
  // Take the resulting wrapper from that `mount` and unmount it by calling `wrapper.unmount`
  // Then assert that the `unsubscribe` mock was called once with toHaveBeenCalledTimes(1)
})
