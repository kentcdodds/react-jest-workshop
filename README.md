# [React][React] + [Jest][Jest] + [Enzyme][Enzyme] = :heart:

[![slides-badge][slides-badge]][slides]
[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]

<a href="https://app.codesponsor.io/link/PKGFLnhDiFvsUA5P4kAXfiPs/kentcdodds/react-jest-workshop" rel="nofollow"><img src="https://app.codesponsor.io/embed/PKGFLnhDiFvsUA5P4kAXfiPs/kentcdodds/react-jest-workshop.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

Find slides [here](http://kcd.im/testing-react)

This is a workshop for learning how to test [React][React] with the [Jest][Jest] testing framework and the
[Enzyme][Enzyme] testing library.

## Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. It's also recommended to use the
[`yarn`](https://yarnpkg.com/) client (rather than [npm](https://www.npmjs.com/)). If you'd rather stick with `npm`,
that's fine. Just replace `yarn` with `npm` in the instructions below and hope that things don't break 😏.
You'll also need a recent version of [git](https://git-scm.com/) installed as well.

With that, run:

```
git clone https://github.com/kentcdodds/react-jest-workshop.git
cd react-jest-workshop
yarn run setup
```

If the `yarn run setup` script finishes without errors (don't worry about warnings) then you're good to go. Otherwise,
please [file an issue](https://help.github.com/articles/creating-an-issue/).

## Testing Instructions

There are two directories in this project that you should be interested in:

- `exercises`: Where the unfinished tests are (where you should add your tests).
- `exercises-final`: Where the finished tests are (where you can reference if you get stuck).

The tests in `exercises` are actually all scaffolded for you. So your goal is to go through and write all the tests. Do this:

1. Run `yarn run watch:test` which will start running the tests in watch mode, meaning that as you save your file, it
will automatically re-run your tests so you can quickly see how you're doing.
2. Choose a file in the `exercises` directory that ends in `.test.js` and implement the tests one-by-one.

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
