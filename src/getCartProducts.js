import { updateCartValue } from "./updateCartValue";

export const getCartProduct = () => {
    let cartProducts = localStorage.getItem('cartProductList');
    if(!cartProducts){
        return [];
    }
   
    cartProducts = JSON.parse(cartProducts);
  
    // Update Cart Icon 
    updateCartValue(cartProducts);
    // console.log(cartProducts);
    return cartProducts ;
    
 

   
}