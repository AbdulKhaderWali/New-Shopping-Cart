import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import Cart from './pages/Cart'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'

export default function App() {
  return (
    <>
    <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route exact path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/categories' element={<Categories/>}/>
            <Route path="/details" element={<ProductDetails/>} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
    </>    
      
  )
}
