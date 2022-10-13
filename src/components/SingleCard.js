import React from 'react'
import { Link } from 'react-router-dom'
import { useProductContext } from '../context/Context'
import "../index.css"
export default function SingleCard(props) {
  const {fetchProducts} = useProductContext()
  function handleClick(){
    fetchProducts(props.title.toLowerCase())
  }
  return (
    <Link to="/products">
    <div className='box' onClick={handleClick}>
    <p>{props.title}</p>
    </div>
    </Link>
    
  )
}
