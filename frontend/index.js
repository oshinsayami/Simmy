const port = 'http://localhost:3000'
const productApi = new ProductApi(port)
const categoryApi = new CategoryApi(port)
const cartURL = `${port}/carts`
const userURL = `${port}/users`
const cartProductURL = `${port}/cart_products`

const cartContent = document.querySelector(".cart-content")
const cartOverlay = document.querySelector(".cart-overlay");
const cartDOM = document.querySelector(".cart");
const list = document.querySelector(".products-center")
const addIcon = "https://cdn2.iconfinder.com/data/icons/bwpx/icons/symbol_addition.gif"
const removeIcon = "http://icons.iconarchive.com/icons/icons8/windows-8/16/Editing-Delete-icon.png"
const loginForm = document.querySelector(".user-container")
const inputFields = document.querySelectorAll(".input-text")
const signUpBtn = document.querySelector(".sign-up-btn")
const logoutBtn = document.querySelector(".logout-btn")
const cartBtn = document.querySelector(".cart-btn")
const closeCartBtn = document.querySelector(".close-cart");

let loggedIn = null 

loginForm.addEventListener('submit', function (e) {
    loginForm.style.display = "none"
    e.preventDefault()
    fetch(userURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: inputFields[0].value,
            email: inputFields[1].value,
        })
    })
    .then(res => res.json())
    .then(function(object){
        loggedIn = object
        renderLoggedInUser()
    })
        
})
productsObj = {}
function renderLoggedInUser(){
    let currentCart = loggedIn.carts[loggedIn.carts.length - 1]
    let welcome = document.querySelector('#welcome')
    welcome.innertText = " "
    welcome.innerText = `Welcome ${loggedIn.name}!`
    cartContent.innerHTML = " "
    let productsObj = {}
    loggedIn.carts[loggedIn.carts.length - 1].cart_products.forEach(cart_product => {
        if (!(cart_product.product.name in productsObj)) {
            productsObj[cart_product.product.name] = [cart_product]
        } else {
            productsObj[cart_product.product.name].push(cart_product)
        }
    })
    for (let name in productsObj) {
        let cart_product = productsObj[name][0]
        let total = (cart_product.product.price * productsObj[name].length)
        cartContent.innerHTML += `
        <div id="cartproduct-${cart_product.id}"><p> <img src=${removeIcon} onClick=removeFromCart(event) data-cart-product-id="${cart_product.id}"> 
        <img src=${addIcon} onClick=handleClkPlus(event) data-cart-product-id="${cart_product.id}" data-product-id="${cart_product.product.id}"> <strong>${cart_product.product.name}</strong> x ${productsObj[name].length} - $${total} </p></div>
        `
    }
    cartContent.innerHTML += `
        <p> <strong>Total Price:</strong> $${currentCart.total}</p>
        <button class="checkout" onClick=checkout(event) data-cart-id="${currentCart.id}"> Checkout </button></p>
        `

    productApi.getProducts()
    categoryApi.getCategories()
        
}
    
function handleClkPlus(event) {
    let cartId = loggedIn.carts[loggedIn.carts.length - 1].id
        
    fetch(cartProductURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            cart_id: cartId,
            product_id: `${event.target.dataset.productId}`

        }),
    })
    .then(res => res.json())
    .then(json => {
        loggedIn = json
        renderLoggedInUser()
    })
            
}

removeFromCart = (event) => {
    productsObj = {}
    let cartProduct = event.target.dataset.cartProductId
    fetch(cartProductURL + "/" + cartProduct, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            id: cartProduct,
        }),
    })
    .then(res => res.json())
    .then(res => {
        loggedIn = res
        renderLoggedInUser()
    })
    }

function checkout(event) {
    let currentCart = loggedIn.carts[loggedIn.carts.length - 1]
    if (currentCart.total > 0) {
        alert("Thank you for shopping.\n\nCome back soon!")
        let cartId = event.target.dataset.cartId
        fetch(port + "/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: cartId
            })
        })
        .then(res => res.json())
        .then(res => {
            loggedIn = res
        renderLoggedInUser()
        })
    }
}

cartBtn.addEventListener('click',showCart)

function showCart(){
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}

closeCartBtn.addEventListener('click', hideCart)

function hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
}

logoutBtn.addEventListener('click', () => {
    window.location.reload()
})



