import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class WelcomeButtons extends Component {
  render () {
    return (
      <div className='welcome-buttons-div'>
        <h1>BUCKET LIST!!!!!!</h1>
        <Link to='/sign-up'><Button variant="dark" className='welcome-button'>Sign Up</Button></Link>
        <Link to='/sign-in'><Button variant="dark" className='welcome-button'>Sign In</Button></Link>
      </div>
    )
  }
}

export default WelcomeButtons
