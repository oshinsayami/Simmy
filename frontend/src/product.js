class Product{
    static all = []
    static list = document.querySelector(".products-center")

    constructor({id, name, brand, price, image, category_id}) {
        this.name = name
        this.brand = brand
        this.price = price
        this.image = image
        this.id = id
        this.category_id = category_id

        this.element = document.createElement('div')
        this.element.dataset["id"] = id
        this.element.id = `product-${id}`

        // const addToCartBtn = this.element.querySelector(".bag-btn")
        // addToCartBtn.addEventListener('click', this.addToCart) 

        Product.all.push(this)
    }

    static filterByCategory(filteredCategory) {
        if (filteredCategory) {
            const filteredProducts = Product.all.filter((product) => {
                console.log("product:", product.category_id)
                console.log("category:", filteredCategory.id)

                return product.category_id === parseInt(filteredCategory.id)
            })
            // debugger
            Product.list.innerHTML = ''
            for (const product of filteredProducts) {
                product.attachToDom()
            }
        } else {
            Product.list.innerHTML = ''
            for (const product of Product.all) {
                product.attachToDom()
            }
        }
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
        Product.list.appendChild(this.render())
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