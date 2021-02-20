class User < ApplicationRecord
    has_many :carts
    has_many :cart_products
    has_many :product, through: :cart_products
end
