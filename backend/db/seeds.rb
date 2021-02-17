# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'

get_products = RestClient.get 'http://makeup-api.herokuapp.com/api/v1/products.json'
product_arr = JSON.parse(get_products)
product_arr.each do |product|
    # byebug

    Product.create(
        name: product["name"],
        price: product["price"],
        image: product["image_link"],
        product_official_link: product["product_link"],
        category_name: product["product_type"],
        color: product["product_colors"],
        brand: product["brand"]
    )
end
