Rails.application.routes.draw do

  namespace :api, defaults: { format: 'json' } do
    get 'message', to: 'greetings#random'
  end

  root 'root#index'
  get 'root/index'
  get 'greetings/random'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # root 'root#index'
end
