const port = 'http://localhost:3000'
const productApi = new ProductApi(port)
const categoryApi = new CategoryApi(port)
const list = document.querySelector(".products-center")







productApi.getProducts()
categoryApi.getCategories()