import React from 'react'
import { useProductContext } from '../context/Context'
import SingleCard from './SingleCard'
import "../index.css"

export default function LandingCards() {
  const {categories} = useProductContext()
  return (
    <div className='cards'>
      {categories.map((e) => {
        return(
          <SingleCard key = {e} title = {e.toUpperCase()}/>
        )
      } )}
    </div>
  )
}
