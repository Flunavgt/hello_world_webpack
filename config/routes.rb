Rails.application.routes.draw do
  get 'root/index'
  root 'root#index'
  get 'greetings/random'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
