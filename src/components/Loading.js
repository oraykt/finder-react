import React, { Fragment } from 'react'
import loading from '../images/loading-gif.jpg'

const Loading = () => {
  return (
    <Fragment>
      <img src={loading} alt="Loading..." style={{width:'200px', display: 'block', margin: 'auto'}} />
    </Fragment>
  )
}

export default Loading