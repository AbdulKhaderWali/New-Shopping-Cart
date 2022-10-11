import React, { createContext, useContext,useEffect, useReducer } from 'react'
import reducer from './reducer'
const AppContext = createContext()
// const API = "https://fakestoreapi.com/products"
const initialState = {
    categories : [],
    products : [],
    category : "",
}
export default function Context({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function fetchData() {
        fetch(`https://fakestoreapi.com/products/categories`)
        .then(response => response.json())
        .then(data => dispatch({type: `SET_CATEGORIES`, payload: data}))
        }

        function fetchProducts(category) {
            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
            .then(data => dispatch({type: `SET_PRODUCTS`, payload: data}))
            }
    useEffect(() => {
        fetchData()
        fetchProducts()
        },[])
    return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
  )
}

//custom Hook
const useProductContext = () => {
    return useContext(AppContext)
} 

export {useProductContext}