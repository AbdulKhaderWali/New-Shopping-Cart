import React from 'react'
import "../index.css"

export default function CartItems(props) {
  return (
    <tbody>
    <tr>
      <td><img src={props.img} alt={props.title}/></td>
      <td>{props.title}</td>
      <td>{props.price}</td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  )
}
