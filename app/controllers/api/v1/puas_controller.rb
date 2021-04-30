module Api
  module V1
    class PuasController < ApplicationController
      def index
        puas = Pua.all

        render json: {
          puas: puas
        }, status: :ok
      end

      def create
        pua = Pua.new(name: params[:pua_name], sex: params[:sex], twitterAccountUrl: params[:twitterAccountUrl])

        if pua.save
          render json: {}, status: :no_content
        else
          render json: {}, status: :internal_server_error
        end
      end

      def search
        searchedPuas = Pua.where("name LIKE ?", "%#{params[:name]}")
        if searchedPuas
          render json: {
            searchedPuas: searchedPuas
          }, status: :ok
        else
          render json: {}, status: :no_content
        end
      end

    end
  end
end
