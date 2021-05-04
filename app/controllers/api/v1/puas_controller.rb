module Api
  module V1
    class PuasController < ApplicationController
      def index

        puas = Pua.all

        reviewsCountSet = reviewsCountSet(puas)
        reviewsAverageSet = reviewsAverageSet(puas)

        render json: {
          puas: puas,
          reviewsCountSet: reviewsCountSet,
          reviewsAverageSet: reviewsAverageSet
        }, status: :ok
      end

      def create
        pua = Pua.new(name: params[:name], sex: params[:sex], twitterAccountUrl: params[:twitterAccountUrl])

        if pua.save
          render json: {}, status: :no_content
        else
          render json: {}, status: :internal_server_error
        end
      end

      def search
        searchedPuas = Pua.where("name LIKE ?", "%#{params[:name]}")

        reviewsCountSet = reviewsCountSet(searchedPuas)
        reviewsAverageSet = reviewsAverageSet(searchedPuas)

        if searchedPuas
          render json: {
            searchedPuas: searchedPuas,
            reviewsCountSet: reviewsCountSet,
            reviewsAverageSet: reviewsAverageSet
          }, status: :ok
        else
          render json: {}, status: :no_content
        end
      end

      private

      def reviewsCountSet(puas)
        puas.map{ |pua| pua.reviews.count }
      end

      def reviewsAverageSet(puas)
        puas.map do |pua|
          average = pua.reviews.average(:star)
          average.to_f.floor(2) if average
        end
      end

    end
  end
end
