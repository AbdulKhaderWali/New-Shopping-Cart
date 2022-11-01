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
        console.log(action.payload)    
        return{
                ...state,
                cart : [state.cart.forEach(item => 
                    item.id===action.payload? {
                        ...item,
                        qty:item.qty+1,
                    }: item
                )]
            }
        case "DECREMENT_QUANTITY":
            break
        default:
            return state;
    }
}

export default reducer