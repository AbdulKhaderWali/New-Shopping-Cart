import React from 'react'
import "../index.css"

export default function SingleCard(props) {
  function handleClick(){
    console.log(props.title)
  }
  return (
    <div className='box' onClick={handleClick}>
    <p>{props.title}</p>
    </div>
    
  )
}
