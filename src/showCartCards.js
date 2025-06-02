import products from '../api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS.JS';
import { getCartProduct } from './getCartProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeCartCard } from './removeCartCard';
import { updateCartProductTotal } from './updateCartProductTotal';

const emptyCartRow = document.querySelector('.emptyCartRow');

let cartProducts = getCartProduct();

let filterProduct = products.filter((curProd) => {
    return cartProducts.some((cureElem) => cureElem.id === curProd.id);
});



console.log(filterProduct);


// To Update the addCart Page 
const cartElement = document.querySelector('#productCartContainer');
const templateContainer = document.querySelector('#productCartTemp');

const showCartProduct = () => {

    // if (filterProduct.length === 0) {
    //     emptyCartRow.style.display = 'block'; // make sure the element is styled to be visible
    // } else {
    //     emptyCartRow.style.display = 'none';
    // }
    
    filterProduct.forEach((curProd) => {
        const {id, name, description, price, image, stock} = curProd;

        let productClone = document.importNode(templateContainer.content , true);

        const lsActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector('#cardValue').setAttribute("id" , `card${id}`);
        productClone.querySelector('.item-name').textContent = name;
        productClone.querySelector('.item-quantity').src = image;
        productClone.querySelector('.item-price').textContent = price;
        productClone.querySelector('.produtQuantity').textContent = lsActualData.quantity;
        productClone.querySelector('.item-total').textContent = lsActualData.price;

        productClone.querySelector('.stockElem').addEventListener('click', (event) => {
            incrementDecrement(event, id, stock, price);
        })

        productClone.querySelector('.simpleCart_remove').addEventListener('click', () => removeCartCard(id));

        cartElement.append(productClone);
    })

    // const removeBtn = document.querySelector('.simpleCart_remove');
    // removeBtn.addEventListener('click', function(){
    //     console.log('removed button clicked');
    // })
    
}



// Showing Cart Products 
showCartProduct();


// Calculating the card total
updateCartProductTotal();
