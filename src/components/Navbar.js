import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
import { useProductContext } from '../context/Context'
export default function Navbar() {
  const {cart} = useProductContext()
  return (
    <nav className='navbar'>
        <div className='logo'>
          <h2>CyberMart</h2>
        </div>
        <div className='links'>
          <ul>
            <li><Link to="/" className='text-decoration'>Home</Link></li>
            <li><Link to="/cart" className='text-decoration'>Cart ({cart.length})</Link></li>
            <li>Icon</li>
          </ul>
        </div>
        <div className='login'>
          <button>Login</button>
        </div>
    </nav>
  )
}
