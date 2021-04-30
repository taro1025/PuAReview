class Review < ApplicationRecord
  belongs_to :pua

  validates :name, :star, :text, presence: true
end
