import React from 'react'
import { useProductContext } from '../context/Context'
import "../index.css"

export default function CartItems(props) {
  const {dispatch} = useProductContext()
  function handleAdd(){
    console.log("HandleAdd clicked")
    dispatch({type: "INCREMENT_QUANTITY", payload:props.id})
  }
  function handleDel(){
    console.log("HandleDel clicked")
  }
  function handleRemove(){
    console.log("Item removed")
    dispatch({type: "REMOVE_FROM_CART", payload:{id: props.id,}})
  }
  return (
    <tbody>
    <tr>
      <td><img src={props.img} alt={props.title}/></td>
      <td>{props.title}</td>
      <td>$ {props.price}</td>
      <td>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <button onClick={handleDel}>-</button>
          {props.qty}
          <button onClick={handleAdd}>+</button>
        </div>
      </td>
      <td><button onClick={handleRemove}>Delete</button></td>
    </tr>
    </tbody>
  )
}
