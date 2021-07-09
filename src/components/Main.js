import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import AboutPage from './About'
import UserDetails from './UserDetails'

export class Main extends Component {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this)
    this.getUserRepos = this.getUserRepos.bind(this)
    this.searchUsers = this.searchUsers.bind(this)
    this.clearUsers = this.clearUsers.bind(this)
    this.state = {
      loading: false,
      users: [],
      user: {},
      repos: []
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
      this.setState({ loading: true })
      console.error(exception)
    })
  }

  getUser(username) {
    this.setState({ loading: true })
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        this.setState({
        user: res.data,
        loading: false
        })
      }).catch(exception => {
        this.setState({ loading: true })
        console.error(exception)
      })
  }

  getUserRepos(username) {
    this.setState({ loading: true })
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        this.setState({
        repos: res.data,
        loading: false
        })
      }).catch(exception => {
        this.setState({ loading: true })
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
        this.setState({ loading: true })
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
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={props=>(
            <div className="container">
              <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClearButton={this.state.users.length > 0}/>
              <Users users={this.state.users} loading={this.state.loading} />
            </div>  
          )} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user/:login" render={props => (
            <UserDetails
              {...props}
              getUser={this.getUser}
              getUserRepos={this.getUserRepos}
              user={this.state.user}
              loading={this.state.loading}
              repos={this.state.repos}
            />
          )} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Main
