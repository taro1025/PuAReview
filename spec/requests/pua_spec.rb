require 'rails_helper'

RSpec.describe "Puas", type: :request do
  describe "GET /index" do
    it "returns a 200 response" do
      get '/api/v1/puas'
      expect(response).to have_http_status "200"
    end
  end

  describe "post create" do
    it "returns a no content" do
      post '/api/v1/puas', params: { pua_name: "p", sex:1, twitterAccountUrl: "s"}
      expect(response).to have_http_status "204" #no content
    end
  end

  describe "post search" do
    it "returns a ok" do
      pua = FactoryBot.create(:pua)
      post search_api_v1_puas_path, params: { name: pua.name+"あいまい"}
      expect(response).to have_http_status "200"
    end
  end

end
