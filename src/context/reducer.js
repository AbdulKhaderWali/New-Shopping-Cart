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
                        cart: [...state.cart,action.payload]

                    }
            }
            return state;

        // case "SET_CART": 
        
        //         return{
        //             ...state,
        //             cart: [...state.cart,action.payload]

        //         }
        default:
            return state;
    }
}

export default reducer