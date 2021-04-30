Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :puas do
        resources :reviews, only: %i[index create]
        resources :posts, only: %i[index create]
        collection do
          get 'search' => 'puas#searchForm'
          post 'search' => 'puas#search'
        end
      end
      resource :user, only: %i[new create]
      post 'login' => 'users#login'
      get 'logout' => 'users#logout'
      get 'logged_in' => 'users#logged_in'
    end
  end
end
