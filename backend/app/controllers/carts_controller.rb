class CartsController < ApplicationController

    def index
        carts = Cart.all
        render json: CartSerializer.new(carts)
    end

    def create
        cart = Cart.create(cart_params)
        render json: cart, include: [:products]
    end

    def update
        cart = Cart.find_or_create_by(params[:id])
        cart.product_ids << params[:product_id]
        cart.save
        # render json: CartSerializer.new(list)
        # else
        # render json: { errors: cart.errors.full_messages }
        # end
    end

    # def show
    #     cart = Cart.find_or_create_by(params[:id])
    #     render json: cart
    # end

    private

    def cart_params
        params.require(:cart).permit(:id, :product_id)
    end
end
