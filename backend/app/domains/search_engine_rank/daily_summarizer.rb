module SearchEngineRank
  class DailySummarizer

    attr_accessor :site
    def initialize(site_id)
      @site = Site.find(site_id)
      @ranks = @site.ranks
    end

    # Collecting the daily summary right after processing a site.
    # We can laverage this solution to be customized and have it trigered
    #   accordinaly with bussines plan.
    # The trick part is to have it running only when the data comes to our
    #   database and always be ready to be visualized.
    # One good pattern for this, but not quite applicable here, is Event Sourcing
    #   https://medium.com/@tobyhede/event-sourcing-with-postgresql-28c5e8f211a2
    # I solved a problem at Predictable Revenue using Event Sourcing + Materialized View
    def call
      SearchEngine.select(:id).each do |search_engine|
        query = site.ranks.limit(1).select(:collected_date)
        first_day = query.order(collected_date: :asc).first.collected_date
        last_day  = query.order(collected_date: :desc).first.collected_date

        (first_day..last_day).each do |day|
          avg = get_day_avg(search_engine.id, day)
          ::RankDaySummary.create!(
            collected_date: day,
            search_engine_id: search_engine.id,
            site_id: site.id,
            value: avg
          )
        end
      end
    end

    private

    def get_day_avg(search_engine_id, day)
      site.ranks
          .where(collected_date: day)
          .where(search_engine_id: search_engine_id)
          .where('value is not null')
          .select(:value)
          .average(:value)
    end
  end
end