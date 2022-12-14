import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>404 Page Not Found</p>
      <Link to="/">Take me Home</Link>
    </div>
  )
}

export default NotFound