import React from 'react'
import { Link } from 'react-router-dom'

const Repo = ({repo}) => {
  return (
    <li className="list-group-item">
      <Link to={{pathname:repo.html_url}} target="_blank">{repo.name}</Link>

    </li>
  )
}


export default Repo