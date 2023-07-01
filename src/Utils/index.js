/**
 * This function calculates the total price of the products in the cart
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} totalPrice: Number
 */
const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

export default totalPrice;