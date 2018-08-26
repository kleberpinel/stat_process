class SearchEngineController < ApplicationController
  def infos
    render json: {
      rank_csv_files_processed: SearchRankUpload.count,
      rank_processed: Rank.count
    }
  end
end
