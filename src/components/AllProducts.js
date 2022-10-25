import { useProductContext } from '../context/Context'
import "../index.css"
import React from 'react'
import SingleProduct from './SingleProduct'

export default function AllProducts() {
  const {products} = useProductContext()
  console.log(products)
    return (
    <div className='all_products'>
    {products.map((e) => {
        return(
            <SingleProduct 
            key = {e.id}
            id = {e.id}
             title = {e.title}
             description = {e.description}
             rating = {e.rating.rate}
             img = {e.image}
             />
         
        )
    })}
    </div>
  )
}
