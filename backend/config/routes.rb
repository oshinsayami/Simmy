Rails.application.routes.draw do
  resources :users
  resources :cart_products
  resources :carts
  resources :categories
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
