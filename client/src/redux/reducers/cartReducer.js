
import * as actionType from "../constants/cartConstant";

// In Reducer we hv this kind of syntax i.e switch

// in State we have product stored, but in action we hv to store the product.
const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case actionType.ADD_TO_CART:
           const item = action.payload;
           const exist = state.cartItems.find(product => product.id === item.id);

           if (exist){
            return { ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data)}
           } else {
            return { ...state, cartItems: [ ...state.cartItems, item]}
           }
        
        case actionType.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload )}
        default:
            return state;
    }
}

export default cartReducer;