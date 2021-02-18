class CartsController < ApplicationController

    def index
        carts = Cart.all
        render json: carts, except: [:created_at, :updated_at]
    end

    def create
        cart = Cart.create(cart_params)
        render json: cart, :include => {
            products:{
                include: :name
            }
        }
    end

    def destroy
        cart = Cart.find(params[:id])
        cart.destroy

        render json: cart, :include => {
            products:{
                include: :name
            }
        }
    end

    private

    def cart_params
        params.require(:cart).permit(:product_id)
    end
end
