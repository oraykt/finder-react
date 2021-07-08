import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'


export class Main extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Users />
      </div>
    )
  }
}

export default Main
