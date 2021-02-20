Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  resources :cart_products, only: [:index, :create, :destroy, :show]
  resources :carts, only: [:index, :show]
  resources :categories, only: [:index]
  resources :products, only: [:index, :show]

  post '/checkout' => 'carts#checkout'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
