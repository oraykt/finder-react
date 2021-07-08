import React, { Component } from 'react'
import User from './User'
import Loading from './Loading'

class Users extends Component {
  render() {
    const { loading, users } = this.props
    if (loading) {
      return <Loading />
    } else {
      return (
      <div className="container mt-2">
        <div className="row">
          {users.map(user => (
          <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
    }
  }
}

export default Users
