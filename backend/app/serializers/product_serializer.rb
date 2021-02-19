class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :brand, :price, :image, :product_official_link, :category, :category_id, :color, :cart_id
end
