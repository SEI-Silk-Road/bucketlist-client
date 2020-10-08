import React, { Fragment } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { withRouter } from 'react-router'

class ItemCreate extends React.Component {
  constructor (props) {
    super(props)
    // create state to store title and text input
    this.state = {
      title: '',
      text: ''
    }
  }
  // on change happening
  handleChange = event => {
    // grab the name and the value of from the Form
    const { name, value } = event.target

    // set new value into the state
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    // make the api call
    axios({
      url: apiUrl + '/items',
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        item: {
          title: this.state.title,
          text: this.state.text,
          isCompleted: false
        }
      }
    })
      // message for success
      .then(() => (
        this.props.msgAlert({
          heading: 'Create Success',
          variant: 'success',
          message: 'An item has been successfully added to your bucketlist!'
        })
      ))
      .then(() => this.props.history.push('/'))
      .catch(() => (
        this.props.msgAlert({
          heading: 'Create Failure',
          variant: 'danger',
          message: 'Error 404!!!!!!'
        })
      ))
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
              value={this.state.title}
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
              value={this.state.text}
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

export default withRouter(ItemCreate)
