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
    console.log(index)
    // finding the index of the item in the list array
    const foundItemIndex = this.state.list.findIndex(item => item._id === event.target.id)
    // making a copy of the list of items
    const copyList = this.state.list
    // finding the targeted item in the copy array and then setting the value of
    // isCompleted on the targeted item to the opposite
    copyList[foundItemIndex] = { ...copyList[foundItemIndex],
      isCompleted: !copyList[foundItemIndex].isCompleted }
    // console.log('our copy list\'s index ', copyList[foundItemIndex])
    console.log('our copy list ', copyList)
    this.setState(copyList)
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
            <button id={item._id} onClick={() => this.handleClick(index)}>Completed</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default List
