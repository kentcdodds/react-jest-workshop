// COMMENT_START
/* eslint no-dupe-keys:0, no-redeclare:0 */
// COMMENT_END
import React, {PropTypes, Component} from 'react'
import store from '../store/Customers'

class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // FINAL_START the key is getting the store from props
      customers: props.store.getCustomers(),
      // FINAL_END
      // WORKSHOP_START normally you'll just use the singleton store
      customers: store.getCustomers(),
      // WORKSHOP_END
    }
  }
  componentDidMount() {
    // FINAL_START
    this.unsubscribe = this.props.store.subscribe(this.updateStateWithCustomers)
    // FINAL_END
    // WORKSHOP_START
    this.unsubscribe = store.subscribe(this.updateStateWithCustomers)
    // WORKSHOP_END
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  updateStateWithCustomers = () => {
    // FINAL_START
    const customers = this.props.store.getCustomers()
    // FINAL_END
    // WORKSHOP_START
    const customers = store.getCustomers()
    // WORKSHOP_END
    this.setState({customers})
  }

  render() {
    const {customers} = this.state
    if (customers.length === 0) {
      return <NoCustomers />
    } else {
      return <ListOfCustomers customers={customers} />
    }
  }
}

// FINAL_START
CustomerList.defaultProps = {store}

CustomerList.propTypes = {
  store: PropTypes.shape({
    getCustomers: PropTypes.func,
    subscribe: PropTypes.func,
  }),
}

// FINAL_END
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
      You have no customers. Better get to work!
    </div>
  )
}

export default CustomerList
