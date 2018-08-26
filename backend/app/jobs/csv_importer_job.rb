class CsvImporterJob < ApplicationJob
  queue_as :default

  def perform(search_rank_upload_id)
    rank_upload = SearchRankUpload.find(search_rank_upload_id)
    CsvImporter::Processor.new(rank_upload.qqfile.current_path).call
  end
end
