import React from 'react'
import "../index.css"
import background from "../images/shop.jpg"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <div className='banner__card'>
          <img className='banner__img' src={background} alt="Background"/>
          <div className='banner__text'>
            <h2>Find Your Fashion Here</h2>
            <p>New stock available, explore and find out what suits you</p>
            <div className='homepage__buttons'>
              <button>Explore Now</button>
              <button><Link to="/categories">Shop By Category</Link></button>
            </div>
          </div>
        </div>
    </div>
  )
}
