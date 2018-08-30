class CsvImporterController < ApplicationController
  def create
    rank_upload = SearchRankUpload.create(qqfile: params[:qqfile])

    # The process will be done in a delayed job to now lock the interface
    # In my project, I am using sidekiq as a worker
    CsvImporterJob.perform_later(rank_upload.id)

    render json: { success: true }
  end
end
