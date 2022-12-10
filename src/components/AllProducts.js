import { useProductContext } from '../context/Context'
import "../index.css"
import React from 'react'
import SingleProduct from './SingleProduct'

export default function AllProducts() {
  const {products,priceSort,rating} = useProductContext()
  function transformedProducts(){
    let sortedProducts = products
    if (priceSort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        priceSort === "low-to-high" ? a.price - b.price : b.price - a.price
      );
    }
    if (rating) {
      sortedProducts = sortedProducts.filter(item => item.rating.rate>=rating)
    }
    
    return sortedProducts
  }
    return (
    <div className='all_products'>
    {transformedProducts().map((e) => {
        return(
            <SingleProduct 
            key = {e.id}
            id = {e.id}
             title = {e.title}
             description = {e.description}
             rating = {e.rating.rate}
             img = {e.image}
             price = {e.price}
             />
         
        )
    })}
    </div>
  )
}
