import { addItemToCart } from "./lib/cartHelper.js"

window.onload =(e) => {
    const shoppingItems = document.getElementById('shopping-items');
    [...shoppingItems.children].forEach((item) => {
        const id = item.getAttribute('data-item-id');
        const name =  item.children[1].textContent;
        const price =  item.children[2].textContent;
        item.children[3].addEventListener('click', () => {
            addToCart(name, id, price)
        })
    })
}


const addToCart = (name, id, price) => {
    const item = {
        name,id,price
    }
    addItemToCart(item)
}