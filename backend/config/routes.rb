Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :csv_importer

  get 'search_engine/infos'              => 'search_engine#infos'
  get 'search_engine/daily_rank_summary' => 'search_engine#daily_rank_summary'
end
