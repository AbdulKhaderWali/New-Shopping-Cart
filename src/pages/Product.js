import React from 'react'
import AllProducts from '../components/AllProducts'
import Filters from '../components/Filters'
import "../index.css"

export default function Product() {
  return (
    <div className='product_page'>
      <div className='filters'>
      <Filters />
      </div>
        <div className='product_items'>
        <AllProducts />
        </div>
    </div>
  )
}
