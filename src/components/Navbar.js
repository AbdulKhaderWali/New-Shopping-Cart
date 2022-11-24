import React, { useRef } from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../index.css"
import { useProductContext } from '../context/Context'
export default function Navbar() {
  const {cart} = useProductContext()
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <header>
    <nav >
          <h2><Link to="/" className='logo'>Cyber<span>Mart</span></Link></h2>
            <ul className='navbar' ref={navRef}>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/cart">Cart ({cart.length})</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          <div className='main'>
            <button><AiOutlineUserAdd/>Login</button>
          {/* <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button> */}
          </div>
          <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </nav>
    </header>
  )
}
