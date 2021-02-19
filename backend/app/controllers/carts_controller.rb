class CartsController < ApplicationController

    def index
        render json: Cart.all.map {|cart| CartSerializer.new(cart)}
    end
end
