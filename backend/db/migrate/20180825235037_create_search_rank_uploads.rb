class CreateSearchRankUploads < ActiveRecord::Migration[5.2]
  def change
    create_table :search_rank_uploads do |t|
      t.string :qqfile

      t.timestamps
    end
  end
end
