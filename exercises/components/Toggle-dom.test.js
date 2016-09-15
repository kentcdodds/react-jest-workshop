// you'll need to import react, enzyme's mount function, and ./Toggle

test('invokes the onToggle prop when clicked', () => {
  // create a mock function of onToggle with jest.fn()
  // create a mountToggle function and call that with {onToggle}
  // take the returned enzyme wrapper and simulate a click event on the button
  // assert that onToggle was called once
  // assert that it was called with `true`
})

test('changes the class to toggle--on when clicked', () => {
  // mountToggle with no specified props (just use defaults from your mountToggle function)
  // click the button
  // take a snapshot of the wrapper.html() and verify it looks good
})

// create a mountToggle function that accepts some props and applies those to a mount of the <Toggle /> component
//   you should also provide defaults for any required props
// Also a clickButton(wrapper) function would be handy to create here as well as both tests will need to do that.
