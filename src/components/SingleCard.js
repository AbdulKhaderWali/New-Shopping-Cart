import React from 'react'
import "../index.css"

export default function SingleCard(props) {
  return (
    <div className='box' onClick={() => (console.log(props.title))}>
    <p>{props.title}</p>
    </div>
    
  )
}
