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
        default:
            return state;
    }
}

export default reducer