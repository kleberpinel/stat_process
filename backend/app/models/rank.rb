class Rank < ApplicationRecord
  belongs_to :search_engine
  belongs_to :site
end
