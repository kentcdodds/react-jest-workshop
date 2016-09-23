// you're going to need to import a few things here:
// react, react-test-renderer, ../store/Customers.stub,
// and the ./CustomerList component (which we're testing)

test('should render no customers', () => {
  // create a snapshotRenderedCustomerList function and test the default
  //   behavior by calling it without arguments
  // Then use the resulting component to check the snapshot
})

test('should render customers', () => {
  // get a store from the stub and initialize it with two customers
  // we need to have the <CustomerList /> component use our stub instead of the singleton store somehow...
  //   We _could_ use Jest's mocking capabilities. Or, we could just alter the CustomerList component to allow you
  //   to specify a store! So go to the CustomerList.js file and add a prop called `store`. Wherever the singleton
  //   `store` is used, use `this.props.store` instead and use defaultProps to have the `store` default to the singleton
  //   `store` (that way actual users of the component don't have to specify the store).
  // Now use the snapshotRenderedCustomerList function you wrote to pass the store as a prop
})

test('should respond to store updates', () => {
  // get both the store and the updateCustomers from a call to `../store/Customers.stub`
  // render the customer list with the store stub
  // take a snapshot
  // call updateCustomers with a few customers
  // take another snapshot
})

// Create a snapshotRenderedCustomerList function that:
// 1. Accepts props
// 2. Creates a component with those props with a call to renderer.create (tip: you may wanna do this in a separate function)
// 3. Asserts on a snapshot of that component with expect(component).toMatchSnapshot()
