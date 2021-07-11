import React, {useContext} from 'react'
import User from './User'
import Loading from './Loading'
import GithubContext from '../context/githubContext'

const Users = ()=> {
  
  const { loading, users } = useContext(GithubContext)

  if (loading) {
    return <Loading />
  } else {
    return (
    <div className="container mt-2">
      <div className="row">
          {users.length > 0 ?
            (users.map(user => (<User key={user.id} user={user} />)))
            : (<h5 className="m-auto" >No users to list</h5>)
          }
      </div>
    </div>
    )
  }
}

export default Users
