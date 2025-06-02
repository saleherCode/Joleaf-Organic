import { getCartProduct } from "./getCartProducts"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeCartCard = (id) => {
    let cartProducts = getCartProduct();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductList", JSON.stringify(cartProducts));

    let itemToBeRemoved = document.querySelector(`#card${id}`);

    if(itemToBeRemoved){
        itemToBeRemoved.remove();
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
}