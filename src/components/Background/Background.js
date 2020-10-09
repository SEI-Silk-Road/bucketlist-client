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
        console.log('This is the json', json.urls.regular)
        this.setState({ imgUrl: json.urls.regular })
      })
      .catch(console.error)
  }

  render () {
    console.log('This is the state', this.state.imgUrl)
    return (
      <div className='bgDiv'>
        <img src={this.state.imgUrl} alt="Random pic from Unsplash" className="background" />
      </div>
    )
  }
}

export default Background
