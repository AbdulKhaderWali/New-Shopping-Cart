import React from 'react'

export default function CartItems(props) {
  return (
    <div>
        <div><img src={props.image} alt="There was an img here"/></div>
        <div>{props.title}</div>
    </div>
  )
}
