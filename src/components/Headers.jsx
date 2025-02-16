import React from 'react'

export default function Headers() {
  return (
    <div className="container">
      <div className="logo">
       <img src="brand_logo (1).png" alt="" />
      </div>

      <div className="navitems">
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
      </div>
      
      <div className="login-btn">
        <button>Login</button>
      </div>
    </div>
  )
}
