import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context/Context'
import "../index.css"
export default function Navbar() {
  const {cart,fetchCart} = useProductContext()
  function handleClick(){
    cart.map((id) => {
      return(
        fetchCart(id)
      )
    })
  }
  return (
    <nav className='navbar'>
        <div className='logo'>
          <h2>ShopCart</h2>
        </div>
        <div className='links'>
          <ul>
            <li><Link to="/" className='text-decoration'>Home</Link></li>
            <li><Link to="/cart" className='text-decoration' onClick={handleClick}>Cart</Link></li>
            <li>Icon</li>
          </ul>
        </div>
        <div className='login'>
          <button>Login</button>
        </div>
    </nav>
  )
}
