import React from 'react'
import CartItems from '../components/CartItems'
import { useProductContext } from '../context/Context'
export default function Cart() {
  const {cartProducts} = useProductContext()
  return(

  <div>
    {
      cartProducts.map((data) => {
        return(
          <CartItems
          key={data.id}
          title = {data.title}
          img = {data.img}
          
          />
        )
      })
    }
  </div>
  )
}
