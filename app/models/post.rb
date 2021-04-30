class Post < ApplicationRecord
  belongs_to :pua

  validates :name, :text, presence: true
end
