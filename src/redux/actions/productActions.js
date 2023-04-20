import fakeStoreAPI from "../../apis/fakeStoreAPI";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fakeStoreAPI.get('/products');
        dispatch({
            type: ActionTypes.FETCH_PRODUCT,
            payload: response.data,
        })
    }
}


export const selectedProduct = (productId) => {
    return async (dispatch) => {
        const response = await fakeStoreAPI.get(`https://fakestoreapi.com/products/${productId}`)
        dispatch({
            type: ActionTypes.SELECTED_PRODUCT,
            payload: response.data,
        })
    }
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

// export const selectedProduct = (products) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCT,
//         payload: products,
//     };
// }

export const removeSelectedProduct = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
}