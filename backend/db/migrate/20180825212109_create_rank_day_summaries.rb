class CreateRankDaySummaries < ActiveRecord::Migration[5.2]
  def change
    create_table :rank_day_summaries do |t|
      t.date :collected_date
      t.string :keyword
      t.integer :value

      t.references :search_engine
      t.references :site

      t.timestamps
    end
  end
end
