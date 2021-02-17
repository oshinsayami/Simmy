class Product < ApplicationRecord
    belongs_to :brand

    def brand_name=(brand_name)
        if !brand_name.blank?
            self.brand = Brand.find_or_create_by(name: brand_name.downcase)
        end
    end

    def brand_name
        self.brand.name
    end
end
