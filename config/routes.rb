Rails.application.routes.draw do

  root :to => 'users#index'
  post '/send_mail' => 'users#send_mail'

  resources :users, only: [:index] do
    collection do
      get :resume
      get :download
      get :display
      get :home
      get :portfolio
      get :contact
      get :email
    end
  end

end
