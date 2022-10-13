import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
          <h2>ShopCart</h2>
        </div>
        <div className='links'>
          <ul>
            <li><Link to="/">Home</Link></li>
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
