class CartsController < ApplicationController

    def index
        carts = Cart.all
        render json: CartSerializer.new(carts)
    end

    def show 
        cart = Cart.find_by(id: params[:id])
        if cart 
           
            render json: cart(:include => {
                user: {:only => [:name]},
            }), except: [:created_at, :updated_at]
        else
            render json: {message: "Cart not found."}
        end 
    end

    def checkout
        cart = Cart.find(params[:id])
        cart.checkout = true 
        cart.save
        user = cart.user 
        
        new_cart = Cart.create(user_id: user.id)
        
        render json: user, :include => {
            carts: {
                except: [:created_at, :updated_at], 
                methods: :total, 
                include: {
                    cart_products:{ 
                        include: :product
                    }
                },
            },
        }, except: [:created_at, :updated_at]
    end 

    
end
