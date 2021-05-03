class Pua < ApplicationRecord
  has_many :reviews
  has_many :posts
  validates :name, :sex, presence: true

end
