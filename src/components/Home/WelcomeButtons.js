import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Background from '../Background/Background'

class WelcomeButtons extends Component {
  render () {
    return (
      <Fragment>
        <Background />
        <div className='welcome-buttons-div'>
          <h1>Bucket List</h1>
          <h4>What will you do next?</h4>
          <Link to='/sign-up'><Button variant="dark" className='welcome-button'>Sign Up</Button></Link>
          <Link to='/sign-in'><Button variant="dark" className='welcome-button'>Sign In</Button></Link>
        </div>
      </Fragment>
    )
  }
}

export default WelcomeButtons
