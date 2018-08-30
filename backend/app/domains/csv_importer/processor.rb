require 'csv'

module CsvImporter
  class Processor

    SEARCH_ENGINE_CSV_INDEX = {
      'Google': {
        rank: 6,
        url: 10,
      },
      'Google Base': {
        rank: 7,
        url: nil,
      },
      'Yahoo': {
        rank: 8,
        url: 11,
      },
      'Bing': {
        rank: 9,
        url: 12,
      },
    }

    attr_reader :file_path, :search_engines, :site
    def initialize(file_path)
      @file_path = file_path
      @search_engines = generate_default_search_engines
    end

    def call
      quote_chars = %w(" | ~ ^ & *)
      begin
        ::CSV.foreach(file_path, encoding: 'UTF-16LE', headers: :first_row, quote_char: quote_chars.shift) do |row|
          row_item = row[0].split("\t")

          @site = Site.find_or_create_by(name: row_item[1])
          save_rank_search_engine(row_item)
        end
      rescue CSV::MalformedCSVError
        quote_chars.empty? ? raise : retry
      end
    end

    private

    def save_rank_search_engine(row_item)
      save_rank(row_item, 'Google')
      save_rank(row_item, 'Google Base')
      save_rank(row_item, 'Yahoo')
      save_rank(row_item, 'Bing')
    end

    def save_rank( row_item, search_engine_name)
      search_engine_csv_index = SEARCH_ENGINE_CSV_INDEX[search_engine_name.to_sym]
      search_engine = search_engines[search_engine_name.to_sym]
      rank_url = search_engine_csv_index[:url] ? row_item[search_engine_csv_index[:url]] : nil

      values = {
        collected_date: row_item[0],
        keyword:        row_item[2],
        market:         row_item[3],
        location:       row_item[4],
        device:         row_item[5],
        value:          row_item[search_engine_csv_index[:rank]],
        url:            rank_url,
        advertiser_competition:    row_item[13],
        global_monthly_searches:   row_item[14],
        regional_monthly_searches: row_item[15],
        cpc:               row_item[16],
        search_engine_id:  search_engine.id,
        site_id:           site.id
      }

      Rank.create!(values)
    end

    def generate_default_search_engines
      { 'Google':      SearchEngine.find_or_create_by!(name: 'Google',
                                                       url: 'https://www.google.ca'),
        'Google Base': SearchEngine.find_or_create_by!(name: 'Google Base',
                                                       url: 'https://www.google.ca'),
        'Yahoo':       SearchEngine.find_or_create_by!(name: 'Yahoo',
                                                       url: 'https://ca.search.yahoo.com'),
        'Bing':        SearchEngine.find_or_create_by!(name: 'Bing',
                                                       url: 'https://www.bing.com')  }
    end
  end
end