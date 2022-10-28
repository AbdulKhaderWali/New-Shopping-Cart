import React from 'react'
import CartItems from '../components/CartItems'
import { useProductContext } from '../context/Context'
import "../index.css"
export default function Cart() {
  const {cart} = useProductContext()
  return(

  <table className='cart__table'>
    <thead>
    <tr>
      <th>Image</th>
      <th>Item</th>
      <th>price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
    </thead>
    {
      cart.map((data) => {
        return(
          <CartItems
          key={data.id}
          id = {data.id}
          title = {data.title}
          img = {data.img}
          price = {data.price}
          
          />
        )
      })
    }
  </table>
  )
}
