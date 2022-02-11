import { CREATEPRODUCTS, DELETEPOST, GETPRODUCTS, UPDATEPRODUCT, GETPRODUCT } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state={products:[]}, action)=>{
    switch (action.type) {
        case GETPRODUCTS:
            return {...state, products: action.payload}
        case GETPRODUCT:
            return {...state, product: action.payload}
        case CREATEPRODUCTS:
            return {...state, products: [...state.products, action.payload]}
        case UPDATEPRODUCT:
            return{...state, products : state.products.map(product=> product._id === action.payload._id ? action.payload: product)}
        case DELETEPOST:
            return {...state, products: state.products.filter(product=> product.id !== action.payload)}
        default:
            return state
    }
}