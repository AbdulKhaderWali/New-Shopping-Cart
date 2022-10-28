import React, { useState } from 'react'
import "../index.css"
import { useProductContext } from '../context/Context'
export default function SingleProduct(props) {
  const {addProduct} = useProductContext()
  const [available, setAvailable] = useState(false)
  function handleAdd(){
    addProduct(props)
    setAvailable((prevState) => (!prevState))
  }
  return (
    <div className='product_card'>
        <div className='product_img'><img src={props.img} alt={props.title}/></div>
        <div className='product_title'>{props.title.slice(0,20)}...</div>
        <div className='product_description'>{props.description.slice(0,30)}...</div>
        <div className='product_rating'>{props.rating}</div>
        <div className='product_footer'>
          <button onClick={handleAdd}>{available ? "Remove from Cart" : "Add to Cart"}</button>
        </div>
    </div>
  )
}
