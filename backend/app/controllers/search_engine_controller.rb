class SearchEngineController < ApplicationController
  def infos
    render json: {
      rank_csv_files_processed: SearchRankUpload.count,
      rank_processed: Rank.count
    }
  end

  def daily_rank_summary
    start_date = params[:start_date] ||= 15.days.ago
    end_date = params[:end_date]   ||= Date.today


    datasets = SearchEngine.all.map do |search_engine|
      data = RankDaySummary.where(collected_date: start_date..end_date)
                    .where(search_engine: search_engine)
                    .pluck(:value)
      {
        label: search_engine.name,
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    end

    labels = (start_date..end_date).map do |date|
      date
    end

    chart = {
      labels: labels,
      datasets: datasets
    }

    render json: chart
  end
end
