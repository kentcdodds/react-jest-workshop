// you'll need to import react, enzyme's render and mount functions,
// and ./Toggle

test('has toggle--off class applied by default', () => {
  // create a renderToggle function and call that without arguments to get a wrapper with the defaults
  // expect the first child to have the class toggle--off (tip: create rootHasClass(wrapper, className) function)
})

test('has toggle--on class applied when initialToggledOn specified to true', () => {
  // use the renderToggle function and call it with {initialToggledOn: true}
  // expect the first child to have the class toggle--on
})

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
  // take a snapshot of the wrapper with mountToJson from enzyme-to-json and verify it looks good
})

// create a renderToggle function that accepts some props and applies those to a render of the <Toggle /> component
//   you should also provide defaults for any required props
// create a mountToggle function that does basically the same thing except with mount
// Also a clickButton(wrapper) function would be handy to create here as well as both tests will need to do that.
