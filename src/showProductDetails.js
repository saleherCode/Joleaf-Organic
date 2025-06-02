import products from '../api/products.json';
import { incrementDecrement } from './incrementDecrement';

const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
console.log(urlParams, id);


const stockElem = document.addEventListener('click', (event) => {
    incrementDecrement(event, id, stock, price);
})

const currentProduct = products.find((curProd) => curProd.id === id);

if(currentProduct){
    document.querySelector('#cardValue').setAttribute("id" , `card${id}`);
    document.querySelector('.productImg img').src = currentProduct.image;
    document.querySelector('.productTitleLg').textContent = currentProduct.name;
    document.querySelectorAll('.productPrice').textContent = currentProduct.price;
    document.querySelector('.productDescription').textContent = currentProduct.description;
}



