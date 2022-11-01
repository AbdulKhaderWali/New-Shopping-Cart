import React from 'react'
import CartItems from '../components/CartItems'
import { useProductContext } from '../context/Context'
import "../index.css"
export default function Cart() {
  const {cart} = useProductContext()
  console.log(cart)
  return(
    <div>
      {cart.length===0? <div className='empty__cart'>
        Your Cart is Empty !
      </div>: 
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
          qty = {data.qty}
          />
        )
      })
    }
  </table>
}
    </div>
  )
}
