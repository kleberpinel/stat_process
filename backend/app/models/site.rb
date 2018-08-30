class Site < ApplicationRecord
  validates_uniqueness_of :name

  has_many :ranks
end
