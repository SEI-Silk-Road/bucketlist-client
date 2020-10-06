import React, { Component, Fragment } from 'react'

import { withRouter } from 'react-router'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class ItemEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {
        title: '',
        text: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange (event) {
    // what key we choose to change
    const name = event.target.name
    // the input
    const value = event.target.value
    // make a copy if we do bookCopy = this.state.book ---- this will change the state when we change bookCopy so this is not allowed.
    const itemCopy = Object.assign({}, this.state.item)
    // update the copy with exact key and value
    itemCopy[name] = value

    // update the state with the updated copy
    this.setState({ item: itemCopy })
  }

  handleSubmit (event) {
    event.preventDefault()

    axios({
      url: apiUrl + '/items/' + this.props.match.params.id,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        item: {
          title: this.state.item.title,
          text: this.state.item.text
        }
      }
    })
      .then(() => this.props.history.push('/'))
      .then(() => this.props.msgAlert({
        heading: 'Edit Success',
        variant: 'success',
        message: 'Edit Successfully'
      }))
      .catch(() => this.props.msgAlert({
        heading: 'Edit Failure',
        variant: 'danger',
        message: 'Error 404!!!!!!'
      }))
  }

  render () {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              value={this.state.item.title}
              placeholder="Enter title"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="text">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type='text'
              name="text"
              value={this.state.item.text}
              placeholder="Enter description for your event"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Fragment>
    )
  }
}

export default withRouter(ItemEdit)
