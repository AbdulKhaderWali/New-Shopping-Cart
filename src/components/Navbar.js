import React, { useState } from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../index.css"
import { useProductContext } from '../context/Context'
export default function Navbar() {
  const {cart} = useProductContext()
  const [responsive, setResponsive] = useState("")
  // const navRef = useRef()
  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // }
  function handleResponsive(){
    setResponsive((prevState) => (prevState==="" ? "responsive_nav" : ""))
  }
  return (
    <header>
    <nav>
          <h2><Link to="/" className='logo'>Cyber<span>Mart</span></Link></h2>
            <ul className={responsive}>
              <li onClick={handleResponsive}><Link to="/categories">Categories</Link></li>
              <li onClick={handleResponsive}><Link to="/cart">Cart ({cart.length})</Link></li>
              <li onClick={handleResponsive}><Link to="/wishlist">Wishlist</Link></li>
              <li onClick={handleResponsive}><Link to=""><AiOutlineUserAdd className='icon'/>Login</Link></li>
            </ul>
            {responsive ? 
              <button className='nav-btn' onClick={handleResponsive}><FaTimes/></button>:
              <button className='nav-btn' onClick={handleResponsive}><FaBars/></button>
          }
            
          {/* <div className='main'>
            
          <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
          </div>
          <button className='nav-btn' onClick=""><FaBars/></button> */}
    </nav>
    </header>
  )
}
