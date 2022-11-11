import React from 'react'
import { useProductContext } from '../context/Context'
import {AiFillStar} from 'react-icons/ai'
import {RiHeart3Fill} from 'react-icons/ri'
import "../index.css"
import { Link } from 'react-router-dom'
export default function ProductDetails() {
    const {productDetail,cart,addProduct,deleteProduct} = useProductContext()
    const description = productDetail.description.split(/[.,;]+\s/)
    function handleAdd(){
      addProduct(productDetail)
    }
    function handleDel(){
      deleteProduct(productDetail)
    }
  return (
    <div className='details_main'>
     <div className='product_detail_left'>
     <div className='like'>
       <RiHeart3Fill />
      </div>
      <div className='single_image'>
        <img src={productDetail.img} alt={productDetail.title} />
      </div>
      </div>
      <div className='top_bottom'>
        <div className='top'>
          <div>
          <h1>$ {productDetail.price}</h1>
            <h2>{productDetail.title}</h2>
            <ul>
              {description.map((text,index) => {return(<li key={index}>{text}</li>)})}
            </ul>
          </div>
          <div className='size'>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXL</li>
            </ul>
          </div>
          <div className='product_detail_rating'>
          <AiFillStar className='filled_star' /> {productDetail.rating}
          </div>
        </div>
        <div className='bottom'>
          {/* buttons */}
          {cart.some((p) => p.id === productDetail.id) ? (
            <button className='danger' onClick={handleDel}>Remove from Cart</button>
          ) : (
            <button onClick={handleAdd}>Add to Cart</button>
          )}
          <Link to="/cart"><button>Checkout</button></Link>
          
        </div>
      </div>
    </div>
  )
}
