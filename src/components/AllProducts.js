import { useProductContext } from '../context/Context'

import React from 'react'
import SingleProduct from './SingleProduct'

export default function AllProducts() {
  const {products} = useProductContext()
    return (
    products.map((e) => {
        return(

            <SingleProduct key={e.id} title = {e.title} />
        )
    })
  )
}
