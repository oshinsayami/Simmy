class Product {
    static all = []
    static list = document.querySelector(".products-center")

    constructor({ id, name, brand, price, image, category_id }) {
        this.name = name
        this.brand = brand
        this.price = price
        this.image = image
        this.id = id
        this.categoryId = category_id

        this.element = document.createElement('div')
        this.element.dataset["id"] = id
        this.element.id = `product-${id}`

        Product.all.push(this)
    }

    static filterByCategory(filteredCategory) {
        if (filteredCategory) {
            const filteredProducts = Product.all.filter((product) => {

                return product.categoryId === parseInt(filteredCategory.id)
            })
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
                    <button class="bag-btn" data-id="${this.id}">
                        <i class="fas fa-shopping-cart"></i>add to bag
                    </button>
                </div>
                <h3>${this.name}-${this.brand}</h3>
                <h4>$${this.price}</h4>
            </article>
        `
        // const elements = this.element.querySelector(".bag-btn")
        this.element.querySelector(".bag-btn").addEventListener('click', this.handleClk)
    
        return this.element
    }

    attachToDom = () => {
        Product.list.appendChild(this.render())
    }
    
    handleClk=(e)=>{
        let cartId = loggedIn.carts[loggedIn.carts.length - 1].id
        
        fetch(cartProductURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                cart_id: cartId,
                product_id: `${e.target.dataset.id}`

            }),
        })
            .then(res => res.json())
            .then(json => {
                loggedIn = json
                renderLoggedInUser()
            })
            
    }

    
    
    
    
    

    
     

}



   

