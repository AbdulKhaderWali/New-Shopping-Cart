import React from 'react'
import "../index.css"
import { useProductContext } from '../context/Context'
export default function SingleProduct(props) {
  const {addProduct,cart} = useProductContext()
  // const [count,setCount] = useState(1)
  function handleAdd(){
    // setCount((prevCount) => (prevCount+1))
    addProduct(props.id)
    console.log(cart)
  }
  return (
    <div className='product_card'>
        <div className='product_img'><img src={props.img} alt={props.title}/></div>
        <div className='product_title'>{props.title.slice(0,20)}...</div>
        <div className='product_description'>{props.description.slice(0,30)}...</div>
        <div className='product_rating'>{props.rating}</div>
        <div className='product_footer'>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
    </div>
  )
}
