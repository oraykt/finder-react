import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import AboutPage from "../components/About"
import Main from '../components/Main'
import Navbar from "../components/Navbar"


const MainRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </BrowserRouter>
)


export default MainRouter