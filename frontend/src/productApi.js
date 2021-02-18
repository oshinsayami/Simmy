class ProductApi {

    constructor(port){  
        this.baseUrl = `${port}/products`
    } 

    getProducts() {
        fetch(this.baseUrl)
        .then(r => r.json())
        .then(json => {
            json["data"].forEach(element => {
                // debugger
                const i = new Product({ id: element.id, ...element.attributes })
                // debugger
                i.attachToDom()
            })
        })
    }
}