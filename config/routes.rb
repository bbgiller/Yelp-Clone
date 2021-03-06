Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users , only: [:create]
    resource :session, only: [:create,:destroy] #should there be :show
    resources :businesses, only: [:show, :index]
    resources :reviews, only: [:index, :create, :show, :update, :destroy]
  end
  root "static_pages#root"


end
