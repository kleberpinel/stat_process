class CsvImporterController < ApplicationController
  def create
    rank_upload = SearchRankUpload.create(qqfile: params[:qqfile])
    CsvImporterJob.perform_later(rank_upload.id)

    render json: { success: true }
  end
end
