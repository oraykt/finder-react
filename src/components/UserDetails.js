import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Repos from './Repos'
import GithubContext from '../context/githubContext'

const UserDetails = ({match}) => {
  const { user, getUser, loading, repos, getUserRepos } = useContext(GithubContext)
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
  },[match.params.login])

  if (loading) return <Loading />
  
  const { avatar_url, html_url, location, name, bio, blog, followers, following, public_repos } = user
  
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={avatar_url} className="card-img-top" />
            <div className="card-body">
              <p className="card-text">{name}</p>
              <p><i className="fa fa-map-marker-alt"></i> {location}</p>
              <p>
                <Link to={{pathname:html_url}} target="_blank">Github Profile</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              {
                bio && <Fragment> <h3>About</h3> <p>{bio}</p></Fragment>
              }
              {
                blog && <Fragment> <h3>Blog</h3> <p>{blog}</p></Fragment>
              }
              <div>
                <span className="badge badge-primary m-1"> Followers: {followers}</span>
                <span className="badge badge-info m-1"> Following: {following}</span>
                <span className="badge badge-success m-1"> Repo: {public_repos}</span>
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

export default UserDetails
