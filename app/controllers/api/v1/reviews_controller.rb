module Api
  module V1
    class ReviewsController < ApplicationController
      before_action :setPua, only: %i[index create]
      def index

        reviews = @pua.reviews

        render json: {
          reviews: reviews
          }, status: :ok
      end

      def create

        review = @pua.reviews.new(name: params[:name], star: params[:star].to_i, text: params[:text])

        if review.save
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
