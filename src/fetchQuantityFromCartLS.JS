import { getCartProduct } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProductLS = getCartProduct();


    let existingProduct = cartProductLS.find((curProd) => curProd.id === id);
    let quantity = 1;
    // console.log('flkjh' + existingProduct)
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity, price};
}