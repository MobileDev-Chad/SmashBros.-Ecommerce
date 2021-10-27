// Add character to Cart
export const addItem = (character) => {
    return{
        type: "ADDITEM",
        payload : character
    }
}

// Delete character from Cart
export const delItem = (character) => {
    return{
        type: "DELITEM",
        payload : character
    }
}