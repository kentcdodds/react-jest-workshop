/**
 * KENT: DON'T FORGET TO UPDATE THIS TO NOT
 * USE PROPS.STORE EVERYWHERE BEFORE YOUR
 * MIDWESTJS TALK :)
 */
import React, {PropTypes, Component} from 'react'
import store from '../store/Customers'

class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: props.store.getCustomers(),
    }
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this.updateStateWithCustomers)
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  updateStateWithCustomers = () => {
    const customers = this.props.store.getCustomers()
    this.setState({customers})
  };

  render() {
    const {customers} = this.state
    if (customers.length === 0) {
      return <NoCustomers />
    } else {
      return <ListOfCustomers customers={customers} />
    }
  }
}

CustomerList.defaultProps = {store}

CustomerList.propTypes = {
  store: PropTypes.shape({
    getCustomers: PropTypes.func,
    subscribe: PropTypes.func,
  }),
}

function ListOfCustomers({customers}) {
  return (
    <div>
      Here is your list of customers!
      <ul>
        {customers.map((c, i) => <li key={i}>{c.name}</li>)}
      </ul>
    </div>
  )
}

ListOfCustomers.propTypes = {
  customers: PropTypes.array,
}

function NoCustomers() {
  return (
    <div>
      <div className="wrapper-that-needs-to-happen-for-some-reason">
        You have absolutely no customers. Better get to work!
      </div>
    </div>
  )
}

export default CustomerList
