import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productListsContainer = document.querySelector('#product-list-container');
const productTemplate = document.querySelector('#productTemplate');



export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach(curProd => {
        const {id, name, description, price, image, stock} = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute("id" , `card${id}`);
        productClone.querySelector('.productTitle a').textContent = name;
        productClone.querySelector('.productTitle a').href = `/product-details.html?id=${id}`;
        productClone.querySelector('.productDesc').textContent = description;
        productClone.querySelector('.productImage img').src = image;
        productClone.querySelector('.productImage a').href = `/product-details.html?id=${id}`;
        productClone.querySelector('.actualPrice').textContent = `$${price}`;
        productClone.querySelector('.oldPrice').textContent = `$${price * 1.5}`;
        productClone.querySelector('.stock').textContent = stock;
       


        productClone.querySelector('.stockElem').addEventListener('click', (event) => {
            homeQuantityToggle(event, id, stock);
        });

        productClone.querySelector('.addToCart_btn').addEventListener('click', (event) => {
            addToCart(event, id, stock);
        });

        productListsContainer.append(productClone);
    });
};