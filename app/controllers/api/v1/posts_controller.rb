module Api
  module V1
    class PostsController < ApplicationController
      before_action :setPua, only: %i[index create]

      def index
        posts = @pua.posts

        render json: {
          posts: posts
          }, status: :ok
      end

      def create
        post = @pua.posts.new(name: params[:name], text: params[:text])

        if post.save
          render json: {}, status: :no_content
        else
          render json: {},status: :internal_server_error
        end
      end

      private

      def setPua
        @pua = Pua.find_by(id: params[:pua_id])
      end

    end
  end
end
