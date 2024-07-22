import React from 'react'
import { Link } from 'react-router-dom'

const Hello = () => {
  return (
    <div>
    <h1>Hello</h1>
    <Link to="/register" className='btn btn-default border w-15  rounded-0  text-decoration-none bg-info'>Sign Up</Link>
    </div>
  )
}

export default Hello