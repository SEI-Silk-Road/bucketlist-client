import React from 'react'
import ItemCreate from './ItemCreate'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class List extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [],
      currentPage: 1,
      itemsPerPage: 4
    }
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/items',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ list: res.data.items }))
  }

  componentDidUpdate (prevProps) {
    if (this.props !== prevProps) {
      axios({
        url: apiUrl + '/items',
        method: 'GET',
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        }
      })
        .then(res => this.setState({ list: res.data.items }))
    }
  }

  handleClick = (index) => {
    // making a copy of the list of items
    const copyList = this.state.list.slice()

    // finding the targeted item in the copy array and then setting the value of
    // isCompleted on the targeted item to the opposite
    copyList[index].isCompleted = !copyList[index].isCompleted

    this.setState({ list: copyList })

    axios({
      url: apiUrl + '/items/' + event.target.id,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        item: {
          isCompleted: this.state.list[index].isCompleted
        }
      }
    })
  }

  paginate = number => {
    this.setState({ currentPage: number })
  }

  render () {
    return (
      <div className='box'>
        <ul>
          <h1>Your Bucket List</h1>
          {/* Call the component to show items based on current page */}
          {this.state.list.map((item, index) => (
            <li className={item.isCompleted ? 'dimmed items' : 'items'} key={item._id}>
              <Link to={`/item/${item._id}`} className='itemLink'>
                <span className={item.isCompleted ? 'complete' : ''}>{item.title}</span>
              </Link>
              <input
                type='checkbox'
                id={item._id}
                readOnly
                checked={item.isCompleted}
                onClick={() => this.handleClick(index)} />
            </li>
          ))}
        </ul>
        <div className='edit-form'>
          <ItemCreate msgAlert={this.props.msgAlert} user={this.props.user} />
        </div>
      </div>
    )
  }
}

export default List
