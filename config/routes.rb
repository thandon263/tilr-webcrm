Rails.application.routes.draw do

  resources :users
    resources :contacts do
      collection do
        get 'search'
      end
      resources :post
    end

  devise_for :users, controllers: { sessions: 'users/sessions' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
