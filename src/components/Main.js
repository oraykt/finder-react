import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './Home'
import AboutPage from './About'
import UserDetails from './UserDetails'
import NotFound from './NotFound'
import GithubState from '../context/githubState'

const Main = () =>{

  // useEffect(() => {
  //   setLoading(true)
  //   axios.get('https://api.github.com/users').then(res => {
  //     setUsers(res.data)
  //     setLoading(false)
  //   }).catch(exception => {
  //     console.error(exception)
  //   })
  // },[])

  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user/:login" component={UserDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
}


export default Main
