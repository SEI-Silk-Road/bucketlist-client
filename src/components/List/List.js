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
    console.log('This is the state', this.state.list)
    const updatedObject = Object.assign({}, this.state.list[index])
    console.log(updatedObject)
    const copyList = this.state.list.slice()
    console.log('This is the copy', copyList)
    console.log('This is isCompleted on secleted object', updatedObject.isCompleted)
    updatedObject.isCompleted = !updatedObject.isCompleted
    console.log('Did I change', updatedObject)
    // finding the targeted item in the copy array and then setting the value of
    // isCompleted on the targeted item to the opposite
    copyList.splice(index, 1, updatedObject)
    console.log('I am the copyList[index] that was clicked', copyList[index])
    this.setState({ list: copyList }, () => console.log('I am the updated state....', this.state.list))

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
