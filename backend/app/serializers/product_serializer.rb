class ProductSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :brand, :price, :image, :category_id, :category
end
