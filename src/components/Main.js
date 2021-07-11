import React, { useState, useEffect } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import AboutPage from './About'
import UserDetails from './UserDetails'
import GithubState from '../context/githubState'

const Main = () =>{

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])

  // useEffect(() => {
  //   setLoading(true)
  //   axios.get('https://api.github.com/users').then(res => {
  //     setUsers(res.data)
  //     setLoading(false)
  //   }).catch(exception => {
  //     console.error(exception)
  //   })
  // },[])

  const getUser = (username) => {
    setLoading(true)
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        setUser(res.data)
        setLoading(false)
      }).catch(exception => {
        console.error(exception)
      })
  }

  const getUserRepos = (username) => {
    setLoading(true)
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        setRepos(res.data)
        setLoading(false)
      }).catch(exception => {
        console.error(exception)
      })
  }

  const clearUsers = () => {
    setUsers([])
  }
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={props=>(
            <div className="container">
              <Search clearUsers={clearUsers} showClearButton={users.length > 0}/>
              <Users />
            </div>  
          )} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user/:login" render={props => (
            <UserDetails
              {...props}
              getUser={getUser}
              getUserRepos={getUserRepos}
              user={user}
              loading={loading}
              repos={repos}
            />
          )} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
}


export default Main
