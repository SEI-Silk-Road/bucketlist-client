import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withRouter } from 'react-router'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Item extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {}
    }
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/items/' + this.props.match.params.id,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => this.setState({ item: res.data.item }))
      .then(() => this.props.msgAlert({
        heading: 'Success',
        variant: 'success',
        message: 'Success to view your item!'
      }))
      .catch(() => (
        this.props.msgAlert({
          heading: 'Failure',
          variant: 'danger',
          message: 'Error 404!!!!!!'
        })
      ))
  }

  handleDelete = event => {
    axios({
      url: apiUrl + '/items/' + this.props.match.params.id,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.props.history.push('/list'))
      .then(() => (
        this.props.msgAlert({
          heading: 'Delete Success',
          variant: 'success',
          message: 'An item has been successfully deleted!'
        })
      ))
      .catch(() => (
        this.props.msgAlert({
          heading: 'Delete Failure ',
          variant: 'danger',
          message: 'An item has not been deleted!'
        })
      ))
  }

  render () {
    const { item } = this.state
    return (
      <div className='edit-prep-screen'>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
        <div>
          <Link to={`/item/${this.props.match.params.id}/edit`}>
            <Button className='edit-button'>Edit</Button>
          </Link>
          <Button className='delete-button'onClick={this.handleDelete}>Delete</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Item)
