Rails.application.routes.draw do

  get '/' => 'contacts#dashboard'

  resources :users
    resources :contacts do
      collection do
        get 'search'
      end
    end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
