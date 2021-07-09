import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'

export class Main extends Component {
  constructor(props) {
    super(props)
    this.searchUsers = this.searchUsers.bind(this)
    this.clearUsers = this.clearUsers.bind(this)
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({ loading:true })
    axios.get('https://api.github.com/users').then(res => {
      this.setState({
        users: res.data,
        loading: false
      })
    }).catch(exception => {
      console.error(exception)
    })
  }

  searchUsers(keyword) {
    this.setState({ loading:true })
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        this.setState({
        users: res.data.items,
        loading: false
        })
      }).catch(exception => {
        console.error(exception)
      })
  }

  clearUsers() {
    this.setState({
      users: []
    })
  }

  render() {
    return (
      <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClearButton={this.state.users.length > 0}/>
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    )
  }
}

export default Main
