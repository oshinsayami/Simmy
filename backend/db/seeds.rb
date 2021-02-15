# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'

get_products = RestClient.get 'http://makeup-api.herokuapp.com/api/v1/products'
byebug
p_arr = JSON.parse(p_arr)[""]
Product.create()