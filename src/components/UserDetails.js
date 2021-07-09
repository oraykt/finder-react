import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Repos from './Repos'

class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }

  render() {
    const { loading, user, repos } = this.props
    if(loading) return <Loading />
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={user.avatar_url} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{user.name}</p>
                <p><i className="fa fa-map-marker-alt"></i> {user.location}</p>
                <p>
                  <Link to={{pathname:user.html_url}} target="_blank">Github Profile</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                {
                  user.bio && <Fragment> <h3>About</h3> <p>{user.bio}</p></Fragment>
                }
                {
                  user.blog && <Fragment> <h3>Blog</h3> <p>{user.blog}</p></Fragment>
                }
                <div>
                  <span className="badge badge-primary m-1"> Followers: {user.followers}</span>
                  <span className="badge badge-info m-1"> Following: {user.following}</span>
                  <span className="badge badge-success m-1"> Repo: {user.public_repos}</span>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <Repos repos={repos}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetails
