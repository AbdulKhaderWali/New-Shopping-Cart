import React from 'react'
import "../index.css"
import {RiHeart3Fill} from 'react-icons/ri'
import {AiFillStar,AiFillDelete} from 'react-icons/ai'
import {BsCartPlusFill} from'react-icons/bs'
import { useProductContext } from '../context/Context'


export default function WishlistItem(props) {
  const {dispatch} = useProductContext()
  function handleAdd(){
    dispatch({type:"ADD_TO_CART",payload:props})
  }
  function handleDel(){
    dispatch({type:"REMOVE_FROM_WISHLIST",payload:props})
  }
  return (
    <div className='wishlist_item'>
        <div className='wishlist_image_wrapper'>
        <img src={props.img} alt={props.title}/>
        </div>
        <div className='wishlist_item_details'>
        <h3>{props.title.slice(0,30)}...</h3>
        
        </div>
        <div className='wishlist_price_rating'>
            <h2>$ {props.price}</h2>
            <div className='wishlist_rating'>
            <AiFillStar className='filled_star'/><p > {props.rating}</p>
            </div>
            <RiHeart3Fill style={{color:"magenta"}} />
        </div>
          <div className='wishlist_buttons'>
            <div className='add' onClick={handleAdd}>
            <BsCartPlusFill />
            </div>
            <div className='del' onClick={handleDel}>
            <AiFillDelete />
            </div>
          </div>
    </div>
  )
}
