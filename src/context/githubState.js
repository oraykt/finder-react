import React, { useReducer } from "react"
import axios from 'axios'
import GithubReducer from "./githubReducer"
import GithubContext from "./githubContext"

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const setLoading = () => {
    dispatch({type: "SET_LOADING"})
  }

  const searchUsers = (keyword) => {
    setLoading()
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => {
        dispatch({
          type: "SEARCH_USERS",
          payload: res.data.items
        })
      }).catch(exception => {
        console.error(exception)
      })
  }

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers
    }}>
    {props.children}
  </GithubContext.Provider>
}

export default GithubState