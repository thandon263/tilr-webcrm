Rails.application.routes.draw do
  resources :contacts do
    resources :post
  end
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
