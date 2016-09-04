import React, {PropTypes, Component} from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

test('styles the button with a background of the context color', () => {
  const component = renderer.create(
    getContextProvider(<Button>Click Me</Button>, {color: 'blue'})
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

function getContextProvider(children, context) {
  class ContextProvider extends Component {
    getChildContext() {
      return context
    }
    render() {
      return <div>{children}</div>
    }
  }
  ContextProvider.childContextTypes = Object.keys(context).reduce((obj, key) => {
    obj[key] = PropTypes.any
    return obj
  }, {})
  return <ContextProvider />
}
