class UsersController < ApplicationController
    def create
        user = User.find_or_create_by(email: params[:email])
        user.name = params[:name]
        user.save

        if user.carts.length == 0
            cart = Cart.create(user_id: user.id)
            user.carts << cart
        end

        render json: user, :include => {
            carts: {
                except: [:created_at, :updated_at],
                methods: :total,
                include: {
                    cart_products:{
                        inlcude: :product
                    }
                },
            },
        }, except: [:created_at, :updated_at]
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, include => {
            carts: {
                except: [:created_at, :updated_at],
                methods: :total,
                include: {
                    cart_products:{
                        inlcude: :product
                    }
                },
            },
        }, except: [:created_at, :updated_at]
        else
            render json: {message: "User not found."}
    end

end
