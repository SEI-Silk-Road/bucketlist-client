import React, { Component } from 'react'
import Unsplash, { toJson } from 'unsplash-js'
// import axios from 'axios'
import fetch from 'node-fetch'
global.fetch = fetch

const unsplash = new Unsplash({ accessKey: 'ahxr4AkcvSuYmvbwSSoPLr5mAoe_gwqcPZTAEndUqXk' })

class Background extends Component {
  constructor () {
    super()

    this.state = {
      imgUrl: ''
    }
  }

  componentDidMount () {
    unsplash.photos.getRandomPhoto({ collections: [4961056, 235549, 17098], orientation: 'landscape' })
      .then(toJson)
      .then(json => {
        this.setState({ imgUrl: json.urls.regular })
      })
      .catch(() => (
        this.props.msgAlert({
          heading: 'Failure',
          variant: 'danger',
          message: 'Error 404!!!!!!'
        })))
  }

  render () {
    return (
      <div className='bgDiv'>
        <img src={this.state.imgUrl} alt="Random pic from Unsplash" className="background" />
      </div>
    )
  }
}

export default Background
