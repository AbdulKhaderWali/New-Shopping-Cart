const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
        return{...state,
                categories: action.payload
            }
        case "SET_PRODUCTS":
            return{...state,
                    products: action.payload
                }
        case "ADD_TO_CART":
            const found = state.cart.find((item) => item.id === action.payload.id)
            if (!found) {
                    return{
                        ...state,
                        cart: [...state.cart,{...action.payload, qty:1}]

                    }
            }
            return state;
        case "REMOVE_FROM_CART" :
            return{
                ...state,
                cart : state.cart.filter(item => item.id!==action.payload.id)
            }
        case "INCREMENT_QUANTITY":
        return{
                ...state,
                cart : state.cart.map(item => 
                    item.id===action.payload.id? {
                        ...item,
                        qty:item.qty+1,
                    }: item
                )
            }
        case "DECREMENT_QUANTITY":
            return{
                ...state,
                cart : action.payload.qty > 1 ? state.cart.map(item => 
                    item.id===action.payload.id? {
                        ...item,
                        qty:item.qty-1,
                    }: item
                ): state.cart.filter(item => item.id!==action.payload.id)
            }

        case "SINGLE_PRODUCT_DETAILS": 
        return{
                ...state,
                productDetail : action.payload
            }
        case "ADD_TO_WISHLIST":
            const inWishlist = state.wishlist.find((item) => item.id === action.payload.id)
            if (!inWishlist) {
                    return{
                        ...state,
                        wishlist: [...state.wishlist,action.payload]

                    }
            }
            return state;
        case "REMOVE_FROM_WISHLIST":
            return{
                ...state,
                wishlist : state.wishlist.filter(item => item.id!==action.payload.id)
            }
        default:
            return state;
    }
}

export default reducer

export const filterReducer = (state,action) => {
    switch(action.type){
        case "PRICE_SORT":
            return{
                ...state,
                priceSort: action.payload
            }
        case "CLEAR_FILTERS":
            return{
                priceSort : "none",
                rating : false,
            }
        case "SET_RATING":
            return{
                ...state,
                rating: action.payload
            }
        default:
            return state;
    }
}