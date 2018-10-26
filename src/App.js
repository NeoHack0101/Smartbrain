import React, { Component } from 'react'
import Clarifai from 'clarifai'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css'

const app = new Clarifai.App({
  apiKey: '3ec8ae8c060f41ea9c1b3f3fd997ff69'
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignedin: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    }
  }

  displayFaceBox = box => {
    console.log(box)
    this.setState({ box: box })
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onPictureSubmit = () => {
    this.setState({ imgUrl: this.state.input })

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(entries => {
              if (entries) {
                this.setState({
                  user: {
                    ...this.state.user,
                    entries: entries
                  }
                })
              }
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  onRouteChange = route => {
    this.setState({ route: route })
    if (route === 'home') {
      this.setState({ isSignedin: true })
    } else {
      this.setState({ isSignedin: false })
    }
  }

  loadUser = user => {
    this.setState({
      user: user
    })
    console.log(this.state)
  }

  render() {
    const { isSignedin, box, imgUrl, route } = this.state
    return (
      <div className="App">
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedin={isSignedin}
        />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        ) : route === 'signin' ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    )
  }
}

export default App
