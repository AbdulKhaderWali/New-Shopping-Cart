import React from 'react'
import "../index.css"
import {AiFillStar} from 'react-icons/ai'
import { useProductContext } from '../context/Context'
import { Link } from 'react-router-dom'
export default function SingleProduct(props) {
  const {addProduct,deleteProduct,cart,dispatch,wishlist} = useProductContext()
  function handleAdd(){
    addProduct(props)
  }
  function handleDel(){
    deleteProduct(props)
  }
  function handleDetail(){
    dispatch({type:'SINGLE_PRODUCT_DETAILS',payload: props})
  }
  function addWishlist(){
    dispatch({type:'ADD_TO_WISHLIST',payload:props})
  }
  function remWishlist(){
    dispatch({type:'REMOVE_FROM_WISHLIST',payload:props})
  }
  return (
    <div className='product_card'>
        <div className='product_img'><img src={props.img} alt={props.title}/></div>
        <div className='product_title'>{props.title.slice(0,20)}</div>
        {/* <div className='product_description'>{props.description.slice(0,30)}...</div> */}
        <div className='product_rating' style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"1rem",}}><div style={{display:"flex",alignItems:"center"}}><AiFillStar className='filled_star'/>{props.rating}</div> $ {props.price}</div>
        
        <div className='product_footer'>
          {cart.some((p) => p.id === props.id) ? (
            <button className='danger' onClick={handleDel}>Remove from Cart</button>
          ) : (
            <button onClick={handleAdd}>Add to Cart</button>
          )}
          <Link to="/details"><button onClick = {handleDetail}>View More</button></Link>
          {wishlist.some((p) => p.id === props.id) ? (
            <button className='danger' onClick={remWishlist}>Remove from Wishlist</button>
          ) : (
            <button onClick={addWishlist}>Add to Wishlist</button>
          )}
        </div>
    </div>
  )
}
