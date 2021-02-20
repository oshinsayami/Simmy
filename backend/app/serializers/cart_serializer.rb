class CartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :products
  has_many :products
end
