import React from 'react'
import ItemCreate from './ItemCreate'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import ItemsOnCurrentPage from '../Pagination/ItemsOnCurrentPage'
import Pagination from '../Pagination/Pagination'

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
    const copyList = this.state.list
    // finding the targeted item in the copy array and then setting the value of
    // isCompleted on the targeted item to the opposite
    copyList[index] = { ...copyList[index],
      isCompleted: !copyList[index].isCompleted }

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
    // get current posts
    const indexOfLastPost = this.state.currentPage * this.state.itemsPerPage
    const indexOfFirstPost = indexOfLastPost - this.state.itemsPerPage
    const currentItems = this.state.list.slice(indexOfFirstPost, indexOfLastPost)

    return (
      <div className='box'>
        <ul>
          <h1>Your Bucket List</h1>
          {/* Call the component to show items based on current page */}
          <ItemsOnCurrentPage currentPage={this.state.currentPage} currentItems={currentItems} handleClick={this.handleClick}/>
        </ul>
        <Pagination
          currentPage={this.state.currentPage}
          paginate={this.paginate}
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.state.list.length}
        />
        <div className='edit-form'>
          <ItemCreate msgAlert={this.props.msgAlert} user={this.props.user} />
        </div>
      </div>
    )
  }
}

export default List
