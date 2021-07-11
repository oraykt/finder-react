import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import AboutPage from './About'
import UserDetails from './UserDetails'
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
          <Route exact path="/" component={props=>(
            <div className="container">
              <Search />
              <Users />
            </div>  
          )} />
          <Route path="/about" component={AboutPage} />
          <Route path="/user/:login" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </GithubState>
  )
}


export default Main
