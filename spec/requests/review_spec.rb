require 'rails_helper'

RSpec.describe "Reviews", type: :request do
  before do
    @testPua = FactoryBot.create(:pua)
    Review.create(name:"a!",pua: @testPua, star: 2, text: "d")
  end
  describe "GET /index" do
    context "when access" do
      it "returns a ok response" do
        get api_v1_pua_reviews_path(@testPua)
        expect(response).to have_http_status "200"
      end
    end
  end
  describe "post /create" do
    context "when access" do
      it "returns a ok response" do
        post api_v1_pua_reviews_path(@testPua), params: { name:"a", star: 3, text: "fa"}
        expect(response).to have_http_status "204"
      end
    end
  end

end
