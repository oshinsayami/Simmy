class Product < ApplicationRecord
    belongs_to :category
    belongs_to :cart

    def category_name=(category_name)
        if !category_name.blank?
            self.category = Category.find_or_create_by(name: category_name.downcase)
        end
    end

    def category_name
        self.category.name
    end
end
