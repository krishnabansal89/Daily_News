import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className="master">
      <div className="container">

        <ul>
          <li id='logo'>Daily News</li>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className="categories">
          <Link to="/">General</Link>
          <Link to="/Entertainment">Entertainment</Link>
          <Link to="/Business">Business</Link>
          <Link to="/Health">Health</Link>
          <Link to="/Science">Science</Link>
          <Link to="/Sports">Sports</Link>
          <Link to="/Technology">Technology</Link>
      </div>
    </div>
  )
}
