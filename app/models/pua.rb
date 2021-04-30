class Pua < ApplicationRecord
  has_many :reviews
  has_many :posts
  validates :name, :sex, presence: true

  def countReview
    reviews.count
  end
end
