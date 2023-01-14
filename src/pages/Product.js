import React from 'react'
import AllProducts from '../components/AllProducts'
import Filters from '../components/Filters'
import { useProductContext } from '../context/Context'
import "../index.css"
import HashLoader from 'react-spinners/HashLoader'

export default function Product() {
  const {loading} = useProductContext()
  return (
    <div className='product_page'>
      <div className='filters'>
      <Filters />
      </div>
      {loading ? (<HashLoader color='#1478ab' style={
        {
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }
      } />):(
      <div className='product_items'>
      <AllProducts />
      </div>
      )}
    </div>
  )
}
