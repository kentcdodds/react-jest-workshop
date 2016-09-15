# Toggle

This demonstrates how to test for output and avoid testing implementation details.
One of the things you want to avoid in testing, be it unit, integration, whatever,
is testing *how* something works rather than simply that it accomplishes what it
needs to accomplish.

In this component, we want to test as much as we can by purely changing the props
used to initialize it. However, this component also responds to user interaction
to alter some of its state, so we'll work with simulating user-invoked events to
test how that interaction changes the output of our component as well as how it
interacts with the props that we pass it.

# Button

This demonstrates how you might test something that utilizes context.
It is unlikely you have very many places where you'll be doing this
(using context), however there are some cases where you'll do that.
