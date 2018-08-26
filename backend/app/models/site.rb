class Site < ApplicationRecord
  validates_uniqueness_of :name
end
