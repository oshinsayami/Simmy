class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: ProductSerializer.new(products)
    end

    def show
        product = Product.find_by(id:params[:id])
        if product
            render json: products, except: [:created_at, :updated_at]
        else 
            render json: {message: "Product not found."}
        end 
    end 

end
