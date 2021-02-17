class Product{
    static all = []
    constructor({id, name, brand_name, price, image, product_official_link, category_id, color }) {
        this.name = name
        this.brand = brand
        this.price = price
        this.image = image
        this.id = id

        this.element = document.createElement('div')
        this.element.id = `product-${id}`

        // const addToCartBtn = this.element.querySelector(".bag-btn")
        // addToCartBtn.addEventListener('click', this.addToCart) 

        Product.all.push(this)
    }

    render() {
        this.element.innerHTML = `
            <article class = "product">
                <div data-id="${this.id}" class="img-container">
                    <img src="${this.image}" alt="product" class="product-img">
                    <button onClick=addToCart(event) class="bag-btn" data-id="${this.id}">
                        <i class="fas fa-shopping-cart"></i>add to bag
                    </button>
                </div>
                <h3>${this.name}-${this.brand}</h3>
                <h4>$${this.price}</h4>
            </article>
        `
        return this.element
    }

    attachToDom() {  
        list.appendChild(this.render())
        const addToCartBtn = this.element.querySelector(".bag-btn")

    }

    // addToCart = (e) => {
    //     e.target.innerText = "In Cart"
    //     const div = document.createElement("div")
    //     div.classList.add("cart-item")
    //     div.innerHTML= `
    //             <img src=${this.image} alt="product">
    //             <div>
    //                 <h4>${this.name}-${this.brand}</h4>
    //                 <h5>$${this.price}</h5>
    //                 <span class="remove-product" data-id=${this.id}>remove</span>
    //             </div>
    //             <div>
    //                 <i class="fas fa-chevron-up" data-id=${this.id}></i>
    //                 <p class="product-amount">
    //                     ${this.price}
    //                 </p>
    //                     <i class="fas fa-chevron-down" data-id=${this.id}></i>
    //             </div>
    //         ` 
    //     cartContent.appendChild(div)
    
    // }

    
} 