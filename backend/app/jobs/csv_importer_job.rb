class CsvImporterJob < ApplicationJob
  queue_as :default

  def perform(search_rank_upload_id)
    import_csv_file(search_rank_upload_id)
    generate_daily_summary
  end

  private

  def import_csv_file(search_rank_upload_id)
    rank_upload = SearchRankUpload.find(search_rank_upload_id)
    CsvImporter::Processor.new(rank_upload.qqfile.current_path).call
  end

  def generate_daily_summary
    Site.select(:id).each do |site|
      SearchEngineRank::DailySummarizer.new(site.id).call
    end
  end
end
