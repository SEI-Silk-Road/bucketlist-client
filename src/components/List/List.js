import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

class List extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
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

  handleClick = (index) => {
    // making a copy of the list of items
    const copyList = this.state.list
    // finding the targeted item in the copy array and then setting the value of
    // isCompleted on the targeted item to the opposite
    copyList[index] = { ...copyList[index],
      isCompleted: !copyList[index].isCompleted }

    this.setState(copyList)

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

  render () {
    const { list } = this.state

    return (
      <ul>
        {list.map((item, index) => (
          <li key={item._id}>
            <Link to={`/item/${item._id}`} className={item.isCompleted ? 'complete' : ''}>
              {item.title}
            </Link>
            <input type='checkbox' id={item._id} onClick={() => this.handleClick(index)} />
          </li>
        ))}
      </ul>
    )
  }
}

export default List
