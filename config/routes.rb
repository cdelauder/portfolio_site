Rails.application.routes.draw do

  root :to => 'users#index'

  resources :users, only: [:index] do
    collection do
      get :resume
      get :download
      get :display
    end
  end
  resources :photos, only: [:index]
  resources :links, only: [:index]  
  resources :contacts, only: [:index]
end
