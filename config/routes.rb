Rails.application.routes.draw do

  root :to => 'users#index'

  resources :users, only: [:index] do
    collection do
      get :resume
      get :download
      get :display
      get :home
      get :portfolio
      get :contact
    end
  end

end
