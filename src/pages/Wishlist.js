import React from 'react'
import WishlistItem from '../components/WishlistItem'
import { useProductContext } from '../context/Context'

export default function Wishlist() {
  const {wishlist} = useProductContext()
  return (
    <div className='wishlist'>
      <p>My Wishlist</p>
      {wishlist.map(item => {return(
        <WishlistItem
        key={item.id}
        id={item.id} 
        img = {item.img}
        title = {item.title}
        rating = {item.rating}
        price = {item.price}
        />
      )})}
    </div>
  )
}
