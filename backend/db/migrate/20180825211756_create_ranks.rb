class CreateRanks < ActiveRecord::Migration[5.2]
  def change
    create_table :ranks do |t|
      t.date :collected_date
      t.string :keyword
      t.string :market
      t.string :device
      t.string :location
      t.integer :value
      t.string :url
      t.decimal :advertiser_competition
      t.integer :global_monthly_searches
      t.integer :regional_monthly_searches
      t.decimal :cpc

      t.references :search_engine
      t.references :site

      t.timestamps
    end
  end
end
