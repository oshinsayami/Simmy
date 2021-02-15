class Product < ApplicationRecord
    belongs_to :cart
    belongs_to :brand
end
