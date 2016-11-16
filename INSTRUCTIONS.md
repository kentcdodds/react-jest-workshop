# Instructions

If you'd like to follow along:

1. `$ git clone https://github.com/kentcdodds/react-jest-workshop.git`
2. `$ cd react-jest-workshop`
4. `$ npm run setup`

You'll notice that this repository is already (mostly) set up for a React project.
It's a bit contrived and doesn't actually amount to anything but a couple
disconnected components and a fairly worthless (non-flux) store.

You'll also notice that right next to each module, there's a `.test.js` file where
there's a single test that just verifies that your tests are running.

We already have many of the same dependencies you would have in a normal react
project like `babel` and friends, `react` (and friends), and
`eslint`... and friends. However, to get our tests going, we're going to need
a few more dependencies. Oh, and one more thing, let me introduce you to your new
best friend:

🐯 *- Hi! I'm Terry the Tiger! These instructions are really long and boring! So*
*I'll pop up here and there where you'll be expected to actually do something!*
*And if you really want to skip around, just copy me and <kbd>⌘</kbd>+<kbd>f</kbd>*
*(or <kbd>CTRL</kbd>+<kbd>f</kbd> on windows) for me on the page. See you around!*

# Incomplete :-(

Unfortunately I haven't had time to finish this (as I did with the AVA counterpart)

On the plus side, Jest is pretty easy to get set up! And I have a few (free) videos
on [egghead.io](https://egghead.io/) [here](http://kcd.im/egghead-jest) to help you
get going.

Also, this repo has `exercises` (where you'll do most of your work) and
`exercises-final` (where you can check your work). If you notice any typos or anything
feel free to [make a pull request](http://makeapullrequest.com/) to the `templates`
directory :)

Thanks!

---

## Appendix

### Redux

You may be wondering, "how do I test components that use Redux?" Well, this repo
doesn't really show that, but it's because it's pretty much exactly how you do
a normal `Props` input test because if you're using `connect` from `react-redux`
then you simply `export` the component that you're wrapping in `connect` for
testing purposes, and just test that the same way you do other components with
`Props` inputs.

If you're not using `connect` and you're subscribing to it yourself, then you'll
simply treat it like the `Data` input test where you accept the store as a prop
and add an item in `defaultProps` for the actual store singleton.
