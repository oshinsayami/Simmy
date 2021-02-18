class Category {
    static all = []
    static categoryBar = document.getElementById("category-bar")

    constructor({ id, name }) {
        this.id = id
        this.name = name
        this.active = false

        this.element = document.createElement('button')

        Category.all.push(this)
    }

    render() {
        this.element.innerText = this.name
        this.element.id = `category-${this.id}`
        return this.element
    }

    addToDom() {
        Category.categoryBar.append(this.render())
        this.addListeners()
    }

    addListeners() {
        this.element.addEventListener('click',this.setActiveCategory)
    }

    setActiveCategory = (e) => {
        let filteredCategory 
        Category.all.forEach(c => {
            if(c.element === this.element && !this.active){
                c.element.classList.add('activated')
                c.active = true
                filteredCategory = c
            }else{
                c.element.classList.remove('activated')
                c.active = false
            }

            Product.filterByCategory(filteredCategory)
        }) 
    }
}