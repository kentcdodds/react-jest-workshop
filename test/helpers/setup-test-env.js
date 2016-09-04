/**
 * This is used to set up the environment that's needed for most
 * of the unit tests for the project which includes polyfilling,
 * chai setup, and initializing the DOM with jsdom
 */
import 'babel-polyfill'
import chai from 'chai'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

// this has to happen after the globals are set up because `chai-enzyme`
// will require `enzyme`, which requires `react`, which ultimately
// requires `fbjs/lib/ExecutionEnvironment` which (at require time) will
// attempt to determine the current environment (this is where it checks
// for whether the globals are present). Hence, the globals need to be
// initialized before requiring `chai-enzyme`.
chai.use(require('chai-enzyme')())
