import {spy} from 'sinon'
import store from './Customers'
import {expect} from 'chai'

afterEach(() => store.setCustomers([]))

test('should start with empty', () => {
  const customers = store.getCustomers()
  expect(customers).to.have.length(0)
})

test('should allow you to set customers and get them', () => {
  const c0 = {name: 'Bill'}
  const c1 = {name: 'Francine'}
  store.setCustomers([c0, c1])
  const customers = store.getCustomers()
  const [sc0, sc1] = customers
  expect(customers).to.have.length(2)
  expect(c0).to.equal(sc0)
  expect(c1).to.equal(sc1)
})

test('should allow you to subscribe to the store', () => {
  const subscriber = spy()
  const unsubscribe = store.subscribe(subscriber)
  store.setCustomers([])
  expect(subscriber).to.have.been.calledOnce
  subscriber.reset()
  unsubscribe()
  store.setCustomers([])
  expect(subscriber).to.not.have.been.called
})
