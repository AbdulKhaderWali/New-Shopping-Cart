import React from 'react'
import "../index.css"
import {AiFillStar} from 'react-icons/ai'
import { useProductContext } from '../context/Context'
export default function SingleProduct(props) {
  const {addProduct,deleteProduct,cart} = useProductContext()
  function handleAdd(){
    addProduct(props)
  }
  function handleDel(){
    deleteProduct(props)
  }
  return (
    <div className='product_card'>
        <div className='product_img'><img src={props.img} alt={props.title}/></div>
        <div className='product_title'>{props.title.slice(0,40)}</div>
        {/* <div className='product_description'>{props.description.slice(0,30)}...</div> */}
        <div className='product_rating'><AiFillStar className='filled_star'/>{props.rating}</div>
        <div className='product_footer'>
          {cart.some((p) => p.id === props.id) ? (
            <button className='danger' onClick={handleDel}>Remove from Cart</button>
          ) : (
            <button onClick={handleAdd}>Add to Cart</button>
          )}
          
        </div>
    </div>
  )
}
