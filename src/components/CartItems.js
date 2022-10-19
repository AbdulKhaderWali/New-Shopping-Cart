import React from 'react'

export default function CartItems(props) {
  return (
    <div>
        <div><img src={props.img} /></div>
        <div>{props.title}</div>
        <div>{props.count}</div>
    </div>
  )
}
