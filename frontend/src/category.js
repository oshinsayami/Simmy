class Category {
    static all = []

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
}