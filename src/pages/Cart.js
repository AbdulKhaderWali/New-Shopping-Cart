import React from 'react'
import CartItems from '../components/CartItems'
import { useProductContext } from '../context/Context'
export default function Cart() {
  const {cart} = useProductContext()
  return(

  <div>
    {
      cart.map((data) => {
        return(
          <CartItems
          key={data.id}
          id = {data.id}
          title = {data.title}
          img = {data.img}
          
          />
        )
      })
    }
  </div>
  )
}
