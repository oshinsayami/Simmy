class CartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :products
end
