class CategoryApi {
    constructor(port){
        this.baseUrl = `${port}/categories`
    }
        

    getCategories() {
        fetch(this.baseUrl)
        .then(r => r.json())
            .then(json => {
                Category.categoryBar.innerHTML=''
                json["data"].forEach(element => {
                    const b = new Category({ id: element.id, ...element.attributes })
                b.addToDom()
            })
        })
    }
}
