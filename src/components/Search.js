import React, { useState, useContext } from 'react'
import GithubContext from '../context/githubContext'

const Search =  ()=> {
  
  const [keyword, setKeyword] = useState('')

  const { searchUsers, clearUsers, users } = useContext(GithubContext)
  
  const onChange = (e) => {
    setKeyword(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (!keyword) {
      alert('Please type username')
    } else {
      searchUsers(keyword)
      setKeyword('')
    }
  }
  
  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input type="text" value={ keyword } className="form-control" onChange={onChange} placeholder="Please type Github username"/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-info">Search</button>
          </div>
        </div>
      </form>
      
      {users.length > 0 && <button className="btn btn-secondary btn-sm btn-block mt-2" onClick={clearUsers}>Clear Results</button>}
    </div>
  )
}

export default Search
