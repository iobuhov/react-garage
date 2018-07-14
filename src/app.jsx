import { hot } from 'react-hot-loader'
import React, { Component } from 'react'

class App extends Component {
  handleClick = () => {
    window.alert('Hello!')
  }

  render () {
    return (
      <div>
        <h1 onClick={this.handleClick}>App</h1>
      </div>
    )
  }
}

export default hot(module)(App)
