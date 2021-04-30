require 'rails_helper'

RSpec.describe "Users", type: :request do
  before do
    @user = FactoryBot.create(:user)
  end
  describe "post /create" do
    context "when submit confirm" do
      it "returns ok" do
        post api_v1_user_path, params: { email:"fds", password:"fdjsl"}
        expect(response).to have_http_status "200"
      end
    end

  end
  describe "login/logout" do
    context "post /login" do
      it "return ok" do
        post api_v1_login_path, params: { email:"game@gmail.com", password:"marubatusikaku"}
        expect(response).to have_http_status "200"
      end
    end

    context "get /logout" do
      it "params[:session] = nil" do
        post api_v1_login_path, params: { email:"game@gmail.com", password:"marubatusikaku"}
        get api_v1_logout_path
        expect(@current_user).to eq nil
      end
    end
  end
end
