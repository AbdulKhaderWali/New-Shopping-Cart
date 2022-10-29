import React from 'react'
import LandingCards from '../components/LandingCards'
import "../index.css"
import background from "../images/shop.jpg"
export default function Home() {
  return (
    <div>
        <div className='banner__card'>
          <img className='banner__img' src={background} alt="Background"/>
          <div className='banner__text'>
            <h2>Find Your Fashion Here</h2>
            <p>New stock available, explore and find out what suits you</p>
            <button>Explore Now</button>
          </div>
        </div>
        <LandingCards />
    </div>
  )
}
