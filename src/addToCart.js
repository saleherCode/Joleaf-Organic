import { getCartProduct } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProduct();

//-----------------------------------//
// To add the data into localStorage 
//-----------------------------------//

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProduct = getCartProduct();

    const currProdElement = document.querySelector(`#card${id}`); 
    
    
    if(!currProdElement){
        console.error('Element not found.');
        return;
    }

    // console.log(currProdElement);
    let currentAddToCartBtn = currProdElement.querySelector('.addToCart_btn');
    let quantity = currProdElement.querySelector('.produtQuantity').innerText;
    let price = currProdElement.querySelector('.actualPrice').innerText;
    
   currentAddToCartBtn.classList.add('added');
   
    price = price.replace('$' , '');

    let exitingProd =  arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );

    console.log(`fgk ${arrLocalStorageProduct}`);
    console.log("arrLocalStorageProduct:", JSON.stringify(arrLocalStorageProduct, null, 2));

    if(exitingProd && quantity > 1){
        quantity = Number(exitingProd.quantity) + Number(quantity);
        price = Number(price) * Number(quantity);
        let updateCart = {id , quantity, price}

        const updatedArry = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updateCart : curProd;
        })

        // console.log(`Updated array: ${updatedArry}`);
        console.log("Updated array:", JSON.stringify(updatedArry, null, 2));

        localStorage.setItem("cartProductList", JSON.stringify(updatedArry));

         updateCartValue(updatedArry);
        
    }

    if(exitingProd){
        
        // Show toast when product added to cart
        showToast("add", id);
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity);

    console.log(quantity, price);

    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductList", JSON.stringify(arrLocalStorageProduct));


    
    // Update cart item value in header
    updateCartValue(arrLocalStorageProduct);

    
    // Show toast when product added to cart
    showToast("add", id);
   
  
    

    
}