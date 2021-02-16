const list = document.querySelector(".products-center")

fetch('http://localhost:3000/products')
    .then(r => r.json())
    .then(renderProducts)

function renderProducts(arg){
    const products = arg["data"]
    liElements = products.map(function(product){
        let div = document.createElement('div')
        div.innerHTML= `<article class = "product"><div class="img-container">
            <img
            src="${product.attributes.image}"
            alt="product"
            class="product-img"
            />
            <button class="bag-btn" data-id="1">
            <i class="fas fa-shopping-cart"></i>
            add to bag
            </button>
        </div>
        <h3>${product.attributes.name}-${product.attributes.brand}</h3>
        <h4>$${product.attributes.price}</h4></div>`
        return div
    })
    liElements.forEach(element => {
        list.appendChild(element)
    });

}