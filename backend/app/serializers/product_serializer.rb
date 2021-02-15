class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :brand, :price, :image, :product_official_link, :product_type, :color
end
