module SearchEngineRank
  class DailySummarizer

    attr_accessor :site
    def initialize(site_id, date_beginning = nil, date_finish = nil)
      @site = Site.find(site_id)
      @ranks = Rank.where(site_id: site_id)
      if (date_beginning && date_finish)
        @ranks = query.where(:collected_date => date_beginning..date_finish)
      end
    end

    def call
      SearchEngine.all.each do |search_engine|
        @ranks.average(:value)
              .where(search_engine: search_engine)
              .group_by(:collected_date)
      end
    end
  end
end