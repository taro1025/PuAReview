require 'rails_helper'

RSpec.describe Pua, type: :model do
  it "can access yourself reviews" do
    pua = Pua.create(name: "testman", sex: 1, twitterAccountUrl: "s")
    puaReviews = pua.reviews.create(name:"a", text:"test", star: 2)
    expect(puaReviews).to be_valid
  end
end
