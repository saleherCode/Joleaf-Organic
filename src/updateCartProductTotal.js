import { getCartProduct } from "./getCartProducts"

export const updateCartProductTotal = () => {

    let subTotal = document.querySelector('.simpleCart_total');
    let grandTotal = document.querySelector('.simpleCart_grandTotal');

    let cartProducts = getCartProduct();
    let initialValue = 0;

    let totalProductPrice = cartProducts.reduce((accum, currProd) => {
       let productPrice = parseInt(currProd.price) || 0;
       return accum + productPrice
    }, initialValue)

    subTotal.textContent = `$ ${totalProductPrice}`; 
    // console.log(typeof(totalProductPrice))
    let shippingPrice, vatAmmount;
    if(cartProducts.length > 0 && totalProductPrice < 30) {
        shippingPrice = Number(10);        
        vatAmmount = Number(1.80);
    }else {
        shippingPrice = 0;
        vatAmmount = 0;
    }
    grandTotal.textContent = `$ ${totalProductPrice + vatAmmount + shippingPrice}`; 

   
}