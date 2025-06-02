import { getCartProduct } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currrentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currrentCardElement.querySelector('.produtQuantity');
    const productPrice = currrentCardElement.querySelector('.item-total');


    let quantity = 1;
    let localStoragePrice = 0;

    //-------------------
    // Get data from localStorage
    //------------------
    let localCartProducts = getCartProduct();

    let existingProduct = localCartProducts.find((curProd) => curProd.id === id);

    if(existingProduct){
        quantity = existingProduct.quantity;
        localStoragePrice = existingProduct.price;
    }else{
        localStoragePrice = price;
        price = price
    }


    if(event.target.className === 'cartIncrement'){
        if (quantity < stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }


    if(event.target.className === 'cartDecreament'){
        if(quantity > 1){
            quantity -= 1;
        }
    }


    // Updating price in local storage
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id, quantity, price: localStoragePrice};

    updatedCart = localCartProducts.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd
    });

    localStorage.setItem("cartProductList", JSON.stringify(updatedCart));



    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    updateCartProductTotal();


}