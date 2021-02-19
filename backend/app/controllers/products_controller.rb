class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: ProductSerializer.new(products)
    end

end
