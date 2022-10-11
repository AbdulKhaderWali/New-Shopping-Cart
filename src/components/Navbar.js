import React from 'react'
import "../index.css"
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
          <h2>ShopCart</h2>
        </div>
        <div className='links'>
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Icon</li>
          </ul>
        </div>
        <div className='login'>
          <button>Login</button>
        </div>
    </nav>
  )
}
