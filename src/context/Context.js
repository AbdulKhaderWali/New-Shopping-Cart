import React, { createContext, useContext,useEffect, useReducer } from 'react'
import reducer from './reducer'
const AppContext = createContext()
// const API = "https://fakestoreapi.com/products"
const initialState = {
    categories : [],
    products : [],
    cart : [],
    cartProducts : [],
}
export default function Context({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function fetchData() {
        fetch(`https://fakestoreapi.com/products/categories`)
        .then(response => response.json())
        .then(data => dispatch({type: `SET_CATEGORIES`, payload: data}))
        }

        function fetchProducts(selectedCategory) {
            console.log(selectedCategory)
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(response => response.json())
            .then(data => dispatch({type: `SET_PRODUCTS`, payload: data}))
            }

            function addProduct(id){
                dispatch({type: "ADD_TO_CART", payload:id})
            }

            function fetchCart(id){
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => dispatch({type: `SET_CART`, payload: data}))
            }

    useEffect(() => {
        fetchData()
        },[])
    return (
    <AppContext.Provider value={{...state, fetchProducts, addProduct, fetchCart}}>
        {children}
    </AppContext.Provider>
  )
}

//custom Hook
const useProductContext = () => {
    return useContext(AppContext)
} 
export {useProductContext}