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
        case "ADD_PRODUCT":
            const exist = state.cart.includes((i) => i.id===action.payload.id)
            console.log(exist)
            if(exist){
                return state.cart.map((i) => 
                 i.id===action.payload.id ? i.count = action.payload.count : i
                )
            }
            else{
            return state.cart.push(action.payload)
        
            }    
        default:
            return state;
    }
}

export default reducer