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

# Starting here, things are old. I'm migrating this from AVA
# If you wanna help, that'd be great

## AVA

🐯 Let's get this installed and going first:

```
npm install --save-dev ava
```

> At the time of this writing, the latest version of AVA is 0.13.0

This will install it and add it to your `package.json` `devDependencies`.

Now we can add a `test` script which will utilize AVA to run the tests in our
`app/` directory with the filename ending in `.test.js`. 🐯 Add this to the
`scripts` object in your `package.json`.

```javascript
"test": "ava \"app/**/*.test.js\" --verbose"
```

- `\"app/**/*.test.js\"` - a [glob](http://npm.im/glob) which matches our tests.
- `--verbose` to get more information so you can more easily compare the output you see with these instructions.
  I personally prefer to not use `--verbose` normally.

🐯 Now go ahead and run `npm run test`

> protip: `npm run test` `===` `npm test` `===` `npm t`

You should get output that looks like this:

```
- components › Toggle › toggle--off class applied by default
- components › Toggle › toggle--on class applied when initialToggledOn specified to true
- components › Toggle › invokes the onToggle prop when clicked
- store › Customers › customers should start with empty
- store › Customers › setting customers and getting them
- store › Customers › subscribing to the store
- containers › CustomerList › Renders no customers and add button
- containers › CustomerList › Renders customers and add button
- containers › CustomerList › Responds to store updates
- containers › CustomerList › unsubscribes when unmounted

0 tests passed
10 tests todo
```

Great! Before we move onto the next dependency, let's add another script. AVA has an incredibly intelligent `watch`
mode. You may be familiar with this concept from other testing frameworks. The basic idea is that it can be handy to
have your tests re-run whenever you change your source or test files. Most frameworks will re-run all tests when you
save changes, but AVA's watch mode is capable of identifying the effected test files and only re-running tests in those
files. It's truly amazing.

🐯 So let's add a script called `watch:test`. Nothing really special about the `:` in that name. It's just a convention
I like to follow :-)

```javascript
"watch:test": "npm run test -- --watch"
```

> protip: This is a feature of `npm run`. It will pass any arguments after the first `--` to the script you're running
> So you could accomplish this same thing with: `ava \"app/**/*.test.js\" --verbose --watch`, but it's nice to avoid
> duplicating that script

🐯 Now run `npm run watch:test`

You should get output pretty much like before, only this time, you should notice that the process hasn't stopped. Go to
one of the test or source files in `app/` and make a change (add a comment or a new line) and safe the file. You should
see AVA re-run only the tests effected by that change. Totally awesome right?!

🐯 Now stop the process with <kbd>CTL</kbd>+<kbd>c</kbd>

Alrighty, I think we're ready to move onto the next step!

## nyc

The most popular and widely used tool for code coverage is `istanbul`.
Unfortunately `istanbul` doesn't support covering tests run in subprocesses. It
also doesn't support covering `ES6` code that's transpiled with `babel`. This is
the problem that `nyc` solves. It also has an incredibly slick API. 🐯 Let's go ahead
and install the latest version (`5.6.0` at the time of this writing):

```
npm install --save-dev nyc
```

> the latest version of nyc at the time of this writing is `6.1.1`

🐯 Now let's add a script in the `scripts` of our `package.json` to record code
coverage:

```javascript
"cover": "nyc npm run test"
```

- `npm run test` - The script to execute to run the tests we want to cover

🐯 We also need to configure which reporters `nyc` will use. We do this by adding the property `nyc` to the root of our
`package.json`. You can do this right next to the `scripts` property if you like.

```javascript
"nyc": {
  "reporter": [
    "lcov",
    "text",
    "html"
  ]
}
```

- `lcov` - Commonly used format for code coverage tracking tools
- `text` - To get the coverage output in our terminal
- `html` - To get output as a static HTML page viewing with our browser

> protip: these can all be specified in the command as well with the --reporter flag, but I prefer to do it this way
> so that command isn't really long :-)

🐯 Let's run `npm run cover` now to see our coverage. You should see this output:

```
  - components › Toggle › toggle--off class applied by default
  - components › Toggle › toggle--on class applied when initialToggledOn specified to true
  - components › Toggle › invokes the onToggle prop when clicked
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  - store › Customers › customers should start with empty
  - store › Customers › setting customers and getting them
  - store › Customers › subscribing to the store

  0 tests passed
  10 tests todo

----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
```

This is great! Just kidding. We aren't importing any files to actually record code coverage on yet, so we have 100% of
nothing covered. We'll get there! But one problem this presents is until we go through our entire application and test
everything, we have a very poor understanding of our actual coverage over our entire application. This is outside of the
scope of this workshop, but if this is important to you, basically you need to have a single test file who's job it is
to require all the files in your application that you want to cover. You can do this with some magic from `path` and
[`glob`](http://npm.im/glob).

You'll also notice that running this command added two directories to our repo:

- `coverage/` - coverage report information
- `.nyc_output/` - `nyc` specific output (no idea what it's for honestly)

You'll want to make sure that you add these to your `.gitignore` file as they're
generated files and have no place in a version control system. I've already done
this for you. Just don't forget to do this in your own projects.

🐯 one other thing that we'll add to our scripts that's kind of handy from
`nyc` is the ability to validate a level of code coverage percentages:

```
"check-coverage": "nyc check-coverage --statements 100 --branches 100 --functions 100 --lines 100"
```

Each of these options defines a different category of coverage that's been
recorded and the `100` signifies that we want this command to fail if the coverage
report indicates a percentage of less than `100%` for that category. This can be
useful in validation scripts to ensure that the project is maintaining your goal
of coverage percentage. In a small project like this `100%` is a reasonable goal.
However, in your project, something more like `%70` or so may be more reasonable.

If you run `npm run check-coverage` right now, you'll get the following error:

```
ERROR: No coverage files found.
```

This is because right now we're not actually instrumenting any code for coverage yet. Hold your horses!
🏇 we'll get to it!

> protip: You might consider adding this as an installable githook with [ghooks](http://npm.im/ghooks)

## nodemon (optional)

You may find yourself working hard to improve code coverage. Unfortunately, `nyc` doesn't come with an awesome `watch`
mode like AVA does, but it can be really nice when working on code coverage to not have to manually re-run the tests
as you work. So we're going to install `nodemon` to automatically re-run our tests with code coverage as we work.

The `nodemon` module will work great for what we need. 🐯 You can simply install the
latest version (`1.9.1` at the time of this writing):

```
npm install --save-dev nodemon
```

> protip: `npm install --save-dev` `===` `npm i -D`

Now, we'll add a new script which uses `nodemon` to watch the `app/` directory
and execute our `cover` script whenever files change in that directory. 🐯 Add this
to the `scripts` object in your `package.json`.

```
"watch:cover": "nodemon --quiet --watch app --exec npm run cover -s"
```

- `--quiet` -> to reduce the output in our terminal from `nodemon`
- `--watch app` -> respond to changes in the `app/` directory
- `--exec` -> run the following command when a relevant file has changed
- `-s` -> to reduce the output in our terminal from `npm`

🐯 Now if you run `npm run watch:cover`, you should see the same output as before, but
the process wont exit. Now try to change one of the files in the `app/` directory
(add a newline) and the tests should re-run.

> protip: Install [`npm-quick-run`](http://npm.im/npm-quick-run) to type less :-)
>
> protip: Install [`npm-run`](http://npm.im/npm-run) while working with local npm-installed binaries

🐯 Now stop the process with <kbd>CTL</kbd>+<kbd>c</kbd>

## babel-register

So far, we haven't actually tested anything. All of our tests are totally empty.
One thing that we're about to discover as we start importing our modules into our
tests is that AVA wont transpile them with `babel` for us. Let's see what I mean.
🐯 Go ahead and open the `Customers.test.js` file in the `app/store/` directory and uncomment the line that says:
`import store from './Customers'`.

🐯 Now try to run `npm run test` and you'll get output with this error message:

```
SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
```

We have to transpile on the fly by ourselves. Having this control over what happens to our source code is actually quite
nice (even if it means a bit more work for us).

So we need to transpile this code on the fly using `babel-register`, 🐯 so let's go ahead and install the latest
version (`6.5.1` at the time of this writing) of that now:

```
npm install --save-dev babel-register
```

With that, we now need to require that file in every one of our test files that require code we want to transpile. Just
kidding! That would be incredibly lame! AVA has a flag (`--require`) that we can use to basically do this for us.
However, instead of just using `--require babel-register`, we're going to add a new file to do this for us because
we're going to add more environment setup code in there soon.

🐯 So create a new directory called `test/helpers/` and put a new file called `setup-test-env.js`.
Then and place this in there:

```javascript
require('babel-register')
require('babel-polyfill') // this has already been installed. May as well :-)
```

🐯 Now, we're going to configure `AVA` similar to how we configured `nyc`. We'll add a property called `ava` to the root
of our `package.json` like so:

```javascript
"ava": {
  "require": [
    "./test/helpers/setup-test-env.js"
  ]
}
```

🐯 Now if you run the `npm run test` you should get this again:

```
- containers › CustomerList › Renders no customers and add button
- containers › CustomerList › Renders customers and add button
- containers › CustomerList › Responds to store updates
- containers › CustomerList › unsubscribes when unmounted
- components › Toggle › toggle--off class applied by default
- components › Toggle › toggle--on class applied when initialToggledOn specified to true
- components › Toggle › invokes the onToggle prop when clicked
- store › Customers › customers should start with empty
- store › Customers › setting customers and getting them
- store › Customers › subscribing to the store

0 tests passed
10 tests todo
```

Awesome! 🎉 Now, just to be sure, run `npm run cover` and you should get output like this:


```
---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 store/        |    46.15 |      100 |        0 |    46.15 |                |
  Customers.js |    46.15 |      100 |        0 |    46.15 |... 34,35,36,44 |
---------------|----------|----------|----------|----------|----------------|
All files      |    46.15 |      100 |        0 |    46.15 |                |
---------------|----------|----------|----------|----------|----------------|
```

Alrighty, let's deal with these abysmal coverage numbers!

## Test Customers.js

Now we can finally start writing some tests! This module has absolutely nothing to
do with React. It's just regular, vanilla JavaScript! That's the way we like it.
The more we can do that, the better!

There are three APIs exposed from `Customer.js` that we'll be wanting to test:

- `getCustomers`
- `setCustomers`
- `subscribe`

Each is documented using JSDoc. 🐯 Go ahead and open the `Customer.test.js` file and follow the instructions in the
comments. I recommend you run `npm run watch:cover` to have the tests run while you're updating the file. Now go ahead
and implement! You want to look at the comment by the [`sinon`](http://npm.im/sinon) import and the comment at the
bottom about adding an `afterEach`. Look up how to do that
[here](https://www.npmjs.com/package/ava#before--after-hooks).

Once you're all done, your output should look like this:

```
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - components › Toggle › toggle--off class applied by default
  - components › Toggle › toggle--on class applied when initialToggledOn specified to true
  - components › Toggle › invokes the onToggle prop when clicked
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ store › Customers › subscribing to the store

  3 tests passed
  7 tests todo

---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 store/        |      100 |      100 |      100 |      100 |                |
  Customers.js |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
```

😎 stellar!

## Test Toggle.js

Alright! Now we can finally get to testing some React code! As [my slides](http://kcd.im/react-ava#/2/2) illustrate,
React components have three inputs that need to be considered when writing tests:

1. Props
2. User
3. Data

In `Toggle.js` we'll be concerned about the `Props` and `User` inputs. We'll cover
the `Data` input with `CustomerList`.

When testing a React component, it's extremely tempting to go down the path of
reimplementing the component in the test. Essentially validating that this div
has a child button which has these attributes and this text. This makes for a
pretty finicky test suit because anytime you want to refactor the code (not
actually make any changes visible) you have to update the tests.

Instead we strive to simply test the output itself. So we're going to use the
function `renderToStaticMarkup` from `react-dom/server` to take a React component
and render it into its pure HTML form. We'll then make assertions that the output
contains the pieces that we're looking for. This approach definitely comes with
trade-offs, but its pros outweigh its cons.

Before we start writing React tests with AVA, we have one final thing to configure for AVA. Something that's a bit of a
gotcha is AVA actually uses its own configuration for transpiling your tests that's separate from your configuration for
transpiling your source. This can be a bit confusing at first. What we're going to do is tell AVA to transpile our tests
the same way it transpiles our source. This is configured in our `package.json` in the `ava` property we added earlier.

🐯 Update the `ava` property to look like this:

```
"ava": {
  "babel": "inherit",
  "require": [
    "./test/helpers/setup-test-env.js"
  ]
}
```

We're effectively telling AVA to use the same configuration that our app uses. Which is using the `.babelrc` file.

🐯 Go ahead and open `Toggle.test.js` in `app/components/` and check out the comments.

Once you get the first two tests working, your `npm run cover` output should look like this:

```
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ store › Customers › subscribing to the store
  ✔ components › Toggle › toggle--off class applied by default
  ✔ components › Toggle › toggle--on class applied when initialToggledOn specified to true
  - components › Toggle › invokes the onToggle prop when clicked

  5 tests passed
  5 tests todo


---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 components/   |       70 |      100 |    66.67 |       70 |                |
  Toggle.js    |       70 |      100 |    66.67 |       70 |       11,12,13 |
 store/        |      100 |      100 |      100 |      100 |                |
  Customers.js |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |    86.96 |      100 |    88.89 |    86.96 |                |
---------------|----------|----------|----------|----------|----------------|
```

We're missing coverage on the `handleToggleClick` lines. That's what that thrid test is for. So far, we've only tested
changing the `Props` input to our component. Now we need to simulate the `User` input.

To do this, we'll leverage React's Synthetic Event system by using the official
[test utils](https://facebook.github.io/react/docs/test-utils.html):
`react-addons-test-utils`. 🐯 Go ahead and install the latest version of this now
(`0.14.8` is the latest at the time of this writing):

```
npm install --save-dev react-addons-test-utils
```

You'll notice that the instructions require the use of `document.createElement`
which requires a DOM. That's because when you're simulating the User inputs, you
need a DOM. Unfortunately, AVA does not officially support running in the browser
([it's on the roadmap](https://github.com/sindresorhus/ava/issues/24), and
someone seemed to have success
[getting AVA to work with karma](https://github.com/angular/angular.js/issues/13971)).
Luckily we have [jsdom](http://npm.im/jsdom) which works great for our use-case.
It just takes installing and getting set up for each of our tests. 🐯 Let's install
the latest version (`8.3.0` at the time of this writing).

```
npm install --save-dev jsdom
```

With that installed, now we need each one of our tests to have the global
environment set up with this (because most of our tests will need this). 🐯 So go
ahead and open the `setup-test-env.js` file in the `test/helpers/` directory and just
paste this in:

```javascript
/**
 * This is used to set up the environment that's needed for most
 * of the unit tests for the project which includes babel transpilation
 * with babel-register, polyfilling, and initializing the DOM with jsdom
 */
require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator
```

Now, because we've configured AVA to `require` this file, next time our tests
run, they'll have this environment set up for them and have access to the global
`document` for creating elements. Which is what you need to do now. Go! 🏁

Once you have your tests implemented, your `npm run cover` output should look
like this:


```
  - containers › CustomerList › Renders no customers and add button
  - containers › CustomerList › Renders customers and add button
  - containers › CustomerList › Responds to store updates
  - containers › CustomerList › unsubscribes when unmounted
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ components › Toggle › toggle--off class applied by default
  ✔ components › Toggle › toggle--on class applied when initialToggledOn specified to true
  ✔ store › Customers › subscribing to the store
  ✔ components › Toggle › invokes the onToggle prop when clicked

  6 tests passed
  4 tests todo

---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
 components/   |      100 |      100 |      100 |      100 |                |
  Toggle.js    |      100 |      100 |      100 |      100 |                |
 store/        |      100 |      100 |      100 |      100 |                |
  Customers.js |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
All files      |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
```

🔥🔥🔥 awesome!

## Test CustomerList.js

So we've successfully tested the `Props` and `User` inputs. Now what do we do
about `Data` inputs? Well, more and more applications are using the concept of a
single state tree to manage their data and with abstractions like Redux, you don't
often have situations where you `setState` in your component directly based on
changes to data (an abstraction like `react-redux` does this for you). However,
there are situations where we do invoke `setState` in our components manually,
and for those situations we need to have a mechanism for triggering that.

The challenge with this is we often depend on
[singletons](https://en.wikipedia.org/wiki/Singleton_pattern) to store our data
and subscribe to changes. This makes testing difficult because we either need to
make a mechanism for resetting the store between tests, or we run the risk of
tests mucking with the sweet isolation of our tests that we enjoy from AVA.

There is a rather simple solution to this however, it's called `defaultProps` (or,
if you're using `createClass`, it's called `getDefaultProps`). Rather than just
importing a singleton store and using it directly, we specify it as a default prop
and use it from `this.props`. What's nice about this is it allows us to override
it for our tests.

If you look at the currently implementation of `CustomerList` in the
`app/containers` directory, you'll see that it is just using the imported store.
🐯 Your task is to update `CustomerList.js` component to use `defaultProps` instead
and reference the store via `props.store`.

🐯 Once you've finished that, open the `CustomerList.test.js` file.

You'll notice that in the last test, you have to use `document.createElement`.
Good thing we already set up the DOM in our `setup-tests-env.js` so we can do
that! The reason we have to is the lifecycle hook `componentDidMount` does not run
when you use `renderToStaticMarkup` and that's where this component subscribes to
the store. Same goes for the unsubscription code in `componentWillUnmount`.

For this one, you might consider taking a brief glance at the solution if you get
stuck. An abstraction can really reduce the shared logic between these tests.

Once you've got everything passing, your output should look like this:

```
  ✔ store › Customers › customers should start with empty
  ✔ store › Customers › setting customers and getting them
  ✔ store › Customers › subscribing to the store
  ✔ components › Toggle › toggle--off class applied by default
  ✔ components › Toggle › toggle--on class applied when initialToggledOn specified to true
  ✔ components › Toggle › invokes the onToggle prop when clicked
  ✔ containers › CustomerList › Renders no customers and add button
  ✔ containers › CustomerList › Renders customers and add button
  ✔ containers › CustomerList › Responds to store updates
  ✔ containers › CustomerList › unsubscribes when unmounted

  10 tests passed

------------------|----------|----------|----------|----------|----------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------|----------|----------|----------|----------|----------------|
 components/      |      100 |      100 |      100 |      100 |                |
  Toggle.js       |      100 |      100 |      100 |      100 |                |
 containers/      |      100 |      100 |      100 |      100 |                |
  CustomerList.js |      100 |      100 |      100 |      100 |                |
 store/           |      100 |      100 |      100 |      100 |                |
  Customers.js    |      100 |      100 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
All files         |      100 |      100 |      100 |      100 |                |
------------------|----------|----------|----------|----------|----------------|
```

If it does, celebrate! Congratulations! That's it!

## Wrapping up

I hope this was helpful to you! If you have suggestions on improvements, feel
free to [makeapullrequest.com](http://makeapullrequest.com) :-)

🐯 See you on the twittersphere! [@kentcdodds](https://twitter.com/kentcdodds)

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
