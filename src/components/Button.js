import React from 'react'
import '../style/Button.css'
import { Link } from 'react-router-dom'
function Button() {
  return (
    <div>
        <Link to={"/showcards"} className='viewall'>
      <button className='view'>View All</button>
      </Link>
    </div>
  )
}

export default Button
