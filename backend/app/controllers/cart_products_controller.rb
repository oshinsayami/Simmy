class CartProductsController < ApplicationController
   
    def index
        cart_products = CartProduct.all
        render json: cart_products, except: [:created_at, :updated_at]
    end

    def create
        cart_product = CartProduct.create(cart_product_params)
        cart = Cart.find(cart_product_params[:cart_id])
        user = cart.user

        render json: user, :include => {
            carts: {
                except: [:created_at, :updated_at], 
                methods: :total, 
                include: {
                    cart_products:{ 
                        include: :product
                }},
            }
        }, except: [:created_at, :updated_at]
    end 
   
    def destroy 
        cart_product = CartProduct.find(params[:id])
        user = cart_product.cart.user
        cart_product.destroy
        
        render json: user, :include => {
            carts: {
                except: [:created_at, :updated_at], 
                methods: :total, 
                include: {
                    cart_products:{ 
                        include: :product
                }},
            }
        }, except: [:created_at, :updated_at]
    end 

    private
    
    def cart_product_params
        params.require(:cart_product).permit(:cart_id, :product_id)
    end 

end
