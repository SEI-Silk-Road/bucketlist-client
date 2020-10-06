import React, { Fragment, useState } from 'react'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ItemCreate (props) {
  // create state to store title and text input
  const [input, setInput] = useState({
    title: '',
    text: ''
  })

  // on change happening
  const handleChange = event => {
    // grab the name and the value of from the Form
    const { name, value } = event.target

    // set new value into the state
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    // make the api call
    axios({
      url: apiUrl + '/items',
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: {
        item: {
          title: input.title,
          text: input.text
        }
      }
    })
      // message for success
      .then(() => (
        props.msgAlert({
          heading: 'Create Success',
          variant: 'success',
          message: 'An item has been successfully added to your bucketlist!'
        })
      ))
      .then(() => props.history.push('/'))
      .catch(() => (
        props.msgAlert({
          heading: 'Create Failure',
          variant: 'danger',
          message: 'Error 404!!!!!!'
        })
      ))
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={input.title}
            placeholder="Enter title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type='text'
            name="text"
            value={input.text}
            placeholder="Enter description for your event"
            onChange={handleChange}
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

export default ItemCreate
