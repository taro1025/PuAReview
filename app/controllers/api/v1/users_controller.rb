module Api
  module V1
    class UsersController < ApplicationController
      def create
        puts "email:ne!#{params[:user]}"
        user = User.new(email: params[:email], password: params[:password])

        if user.save!
          render json: {
            user: user
            }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def login
        user = User.find_by(email: params[:email], password: params[:password])
        if user
          puts "success!!"
          session[:user_id] = user.id
          puts "session_id:#{session[:user_id]}"
          render json: {
            user: user,
            logged_in: true
            }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def logout
        session.delete(:user_id)

        puts "user:#{session[:user_id]}"
        render json: { logged_in: false}, status: :ok
      end

      def logged_in
        puts "session_id:#{session[:user_id]}"
        puts "aaaaaa#{@current_user}aaa!!!"
        user = User.find_by(id: session[:user_id])
        if user
            render json: { logged_in: true, user: @current_user }
        else
            render json: { logged_in: false, message: 'ユーザーが存在しません' }
        end
      end
    end
  end
end
