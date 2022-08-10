import { ADD_TO_CART, EDIT_CART, HANDLE_CART, REMOVE_FROM_CART } from './types'

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const editCart = (id) => {
    return {
        type: EDIT_CART,
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const handleCart = (open) => {
    return {
        type: HANDLE_CART,
        payload: open
    }
}