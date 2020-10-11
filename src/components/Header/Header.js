import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#/list">Home</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#/list">Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar className='nav' variant='dark' expand="md">
    <Navbar.Brand href="#/list">
      <img src='https://www.free-emoticons.com/files/culture-emoticons/5474.png' className='navImage'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : '' }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
