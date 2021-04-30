require 'rails_helper'

RSpec.describe Post, type: :model do
  it "must have name" do
    post = Post.new(text: "aaa")
    expect(post).not_to be_valid
  end
end
