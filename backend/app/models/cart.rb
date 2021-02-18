class Cart < ApplicationRecord
    has_many :products

    def total
        sum = 0
        self.products.each do |product|
            sum += product.price
        end
        sum
    end
end
