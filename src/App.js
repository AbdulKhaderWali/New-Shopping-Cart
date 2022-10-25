import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Product from './pages/Product'

export default function App() {
  return (
    <>
    <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route exact path="/products" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
    </>    
      
  )
}
