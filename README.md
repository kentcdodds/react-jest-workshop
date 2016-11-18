# [React][React] + [Jest][Jest] + [Enzyme][Enzyme] = :heart:

[![slides-badge][slides-badge]][slides]
[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]

Find slides [here](http://kcd.im/testing-react)

This is a workshop for learning how to test [React][React] with the [Jest][Jest] testing framework and the
[Enzyme][Enzyme] testing library.

## Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository
3. In the directory you cloned the repository, run `npm run setup`

If you need help with these steps, you might check out
[this free Egghead.io course](http://kcd.im/pull-request) which can help you get things going.

If the `npm run setup` script finishes without errors (don't worry about warnings) then you're
good to go. Otherwise, please [file an issue](https://help.github.com/articles/creating-an-issue/).

## Testing Instructions

There are two directories in this project that you should be interested in:

- `exercises`: Where the unfinished tests are (where you should add your tests).
- `exercises-final`: Where the finished tests are (where you can reference if you get stuck).

The tests in `exercises` are actually all scaffolded for you. So your goal is to go through and write all the tests. Do this:

1. Run `npm run watch:test` which will start running the tests in watch mode, meaning that as you save your file, it
will automatically re-run your tests so you can quickly see how you're doing.
2. Choose a file in the `app` directory that ends in `.test.js` and implement the tests one-by-one.

Good luck!

# LICENSE

MIT

[React]: https://facebook.github.io/react/
[Jest]: http://facebook.github.io/jest/
[Enzyme]: http://airbnb.io/enzyme/
[slides]: http://kcd.im/react-jest
[slides-badge]: https://cdn.rawgit.com/kentcdodds/custom-badges/2/badges/slides.svg
[donate]: http://kcd.im/donate
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
