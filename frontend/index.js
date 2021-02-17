const port = 'http://localhost:3000'
const productApi = new ProductApi(port)
const list = document.querySelector(".products-center")
const cartContent = document.querySelector(".cart-content");
const cartUrl = `${port}/cart`






productApi.getProducts()