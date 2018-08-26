class SearchRankUpload < ApplicationRecord
  mount_uploader :qqfile, CsvUploader
end
