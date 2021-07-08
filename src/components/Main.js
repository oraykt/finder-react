import React, { Component } from 'react'
import Navbar from './Navbar'
import User from './User'


export class Main extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <User />
      </div>
    )
  }
}

export default Main
