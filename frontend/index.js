const list = document.querySelector(".products-center")
const cartContent = document.querySelector(".cart-content");

function getProducts(){
    fetch('http://localhost:3000/products')
    .then(r => r.json())
    .then(renderProducts)
}

function renderProducts(arg) {
    const products = arg["data"]
    products.forEach(element => {
        renderProduct(element)
    })
}

function renderProduct(product) {
    const div = document.createElement('div')
    div.id = `product-${product.id}`
    div.innerHTML = `
        <article class = "product">
            <div data-id="${product.id}" class="img-container">
                <img src="${product.attributes.image}" alt="product" class="product-img">
                <button class="bag-btn" data-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>add to bag
                </button>
            </div>
            <h3>${product.attributes.name}-${product.attributes.brand}</h3>
            <h4>$${product.attributes.price}</h4>
        </article>`
    list.appendChild(div)

    const addToCartBtn = div.querySelector(".bag-btn")
    addToCartBtn.addEventListener('click', (e) => addToCart(e, product))
}

function addToCart(e, product) {
    const div = document.createElement("div")
    div.classList.add("cart-item")
    div.innerHTML= `
            <img src=${product.attributes.image} alt="product">
            <div>
              <h4>${product.attributes.name}-${product.attributes.brand}</h4>
              <h5>$${product.attributes.price}</h5>
              <span class="remove-product" data-id=${product.id}>remove</span>
            </div>
            <div>
                <i class="fas fa-chevron-up" data-id=${product.id}></i>
              <p class="product-amount">
                ${product.attributes.price}
              </p>
                <i class="fas fa-chevron-down" data-id=${product.id}></i>
            </div>` 
    cartContent.appendChild(div)
    
}



getProducts()