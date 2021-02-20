class ProductApi {
    constructor(port){  
        this.baseUrl = `${port}/products`
    } 

    getProducts() {
        fetch(this.baseUrl)
        .then(r => r.json())
            .then(json => {
            Product.list.innerHTML = ''
            json["data"].forEach(element => {
                const i = new Product({ id: element.id, ...element.attributes })
                i.attachToDom()
            })
        })
    }
}