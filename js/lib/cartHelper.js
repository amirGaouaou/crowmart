 const USER_CART_NAME = 'user-cart';
 const USER_CART_TOTAL = 'user-cart-total'
 const USER_CART_COUNT = 'user-cart-count'


export const addItemToCart = (item) => {
    const userCart = localStorage.getItem(USER_CART_NAME)
    const userCount = localStorage.getItem(USER_CART_COUNT)
    const userTotal = localStorage.getItem(USER_CART_TOTAL)

    const price = parseFloat(item.price.slice(1))

    if(!userCart) {
        localStorage.setItem(USER_CART_NAME, JSON.stringify([{...item, quantity: 1, price}]))
        localStorage.setItem(USER_CART_COUNT, 1)
        localStorage.setItem(USER_CART_TOTAL, price)
    } else {
        const parsedCart = JSON.parse(userCart)
        const exisitingItem = parsedCart.find( cartItem => cartItem.id === item.id);
        if(exisitingItem){
            exisitingItem.quantity +=1
            localStorage.setItem(USER_CART_NAME, JSON.stringify(parsedCart))
        } else{
            parsedCart.push({...item, quantity: 1, price})
            localStorage.setItem(USER_CART_NAME, JSON.stringify(parsedCart))
        }
        localStorage.setItem(USER_CART_COUNT, parseInt(userCount)+1)
        localStorage.setItem(USER_CART_TOTAL, parseFloat(userTotal)+parseFloat(item.price.slice(1)))
    }

}

export const getCartContent = () => {
    return JSON.parse(localStorage.getItem(USER_CART_NAME))
}

export const getCartTotal = () => {
    return parseFloat(localStorage.getItem(USER_CART_TOTAL))
}

export const getCartCount = () => {
    return parseInt(localStorage.getItem(USER_CART_COUNT))
}


