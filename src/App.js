import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
    <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/products" element={<AllProducts />} />
          </Routes>
    </>    
      
  )
}
