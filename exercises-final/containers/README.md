# CustomerList

This demonstrates how to test a component that has conditional logic in its
render method. More usefully, it demonstrates how you can test components
that re-render based off of updates from an external data source. In this
case this is a (non-flux) Customer Store.

With Redux, doing this test is simpler because you don't concern yourself
with state in your components and they're simply passed the state via props.

In this scenario, we're depending on a "singleton" store for our application
and our component's lifecycle hooks are subscribing to this store. This can
cause issues with our tests potentially mucking with the state of other tests.
To combat this, if we make it possible to override the store we're using (by
utilizing `defaultProps`) then we can easily pass our own stubbed version of
this store to avoid issues with sharing a singleton across tests and allow
us to perform assertions on properties of this stubbed store.

