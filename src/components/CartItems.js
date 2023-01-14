import React, { useState } from 'react'
import { useProductContext } from '../context/Context'
import "../index.css"

export default function CartItems(props) {
  const [quantity,setQuantity] = useState(1)
  const {dispatch} = useProductContext()
  function handleAdd(){
    dispatch({type: "INCREMENT_QUANTITY", payload:{id:props.id,qty:quantity}})
    setQuantity(props.qty)
  }
  function handleDel(){
    dispatch({type: "DECREMENT_QUANTITY", payload:{id:props.id,qty:quantity}})
    setQuantity(props.qty)


  }
  function handleRemove(){
    dispatch({type: "REMOVE_FROM_CART", payload:{id: props.id,}})
  }
  return (
    <tbody className='cart__body'>
    <tr>
      <td className='table_img'><img src={props.img} alt={props.title}/></td>
      <td>{props.title}</td>
      <td>$ {props.price}</td>
      <td>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <button onClick={handleDel}>-</button>
          {props.qty}
          <button onClick={handleAdd}>+</button>
        </div>
      </td>
      <td>
        <div>
          {props.price*props.qty}
        </div>
      </td>
      <td><button onClick={handleRemove}>Delete</button></td>
    </tr>
    </tbody>
  )
}
