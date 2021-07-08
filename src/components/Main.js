import React, { Component } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import axios from 'axios'

export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users').then(res => {
      this.setState({
        users: res.data
      })
    }).catch(exception => {
      console.error(exception)
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Users users={this.state.users} />
      </div>
    )
  }
}

export default Main
