import {getCartTotal, getCartCount } from './lib/cartHelper.js'


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#count').textContent =`You have ${getCartCount()} items in cart` 
    document.querySelector('#total').textContent = `Total: $${getCartTotal()}` 
})
