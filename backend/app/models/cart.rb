class Cart < ApplicationRecord
    belongs_to :user
    has_many :cart_products
    has_many :products, through: :cart_products

    def total
        sum = 0
        self.products.each do |product|
            sum += product.price
        end
        sum
    end
end
