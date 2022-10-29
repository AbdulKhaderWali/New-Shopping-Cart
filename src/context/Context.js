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
            fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(response => response.json())
            .then(data => dispatch({type: `SET_PRODUCTS`, payload: data}))
            }

            function addProduct(data){
                dispatch({type: "ADD_TO_CART", payload:data})
            }

            function deleteProduct(data){
                dispatch({type: "REMOVE_FROM_CART", payload:data})
            }
    useEffect(() => {
        fetchData()
        },[])
    return (
    <AppContext.Provider value={{...state, dispatch, fetchProducts, addProduct,deleteProduct}}>
        {children}
    </AppContext.Provider>
  )
}

//custom Hook
const useProductContext = () => {
    return useContext(AppContext)
} 
export {useProductContext}