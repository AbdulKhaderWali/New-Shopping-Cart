import React, { createContext, useContext,useEffect, useReducer } from 'react'
import reducer, { filterReducer } from './reducer'
import axios from 'axios'
const AppContext = createContext()
// const API = "https://fakestoreapi.com/products"
const initialState = {
    categories : [],
    products : [],
    cart : [],
    cartProducts : [],
    productDetail : [],
    wishlist : [],
    loading : true,
}
export default function Context({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [filter,filterDispatch] = useReducer(filterReducer, {
        priceSort : "",
        rating : 0,
    })
    async function fetchData() {
        try{

            const res = await axios.get(`https://fakestoreapi.com/products/categories`)
            const data = await res.data
            dispatch({type : `SET_CATEGORIES`, payload : data})
        }catch(error){
            console.log("API error",error)
        }
        // .then(response => response.json())
        // .then(data => dispatch({type: `SET_CATEGORIES`, payload: data}))
        }

    async function fetchProducts(selectedCategory) {
            dispatch({type:"LOADING_1"})   
            try{
                const res = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                const data = await res.data
                dispatch({type : `SET_PRODUCTS`, payload : data})
                dispatch({type:"LOADING_0"})
            } catch(error){
                console.log("API error",error)
            }
            // .then(response => response.json())
            // .then(data => dispatch({type: `SET_PRODUCTS`, payload: data}))
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
    <AppContext.Provider value={{...state, dispatch, fetchProducts, addProduct,deleteProduct,...filter,filterDispatch}}>
        {children}
    </AppContext.Provider>
  )
}

//custom Hook
const useProductContext = () => {
    return useContext(AppContext)
} 
export {useProductContext}