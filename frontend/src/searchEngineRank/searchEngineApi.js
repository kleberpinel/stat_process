import * as constants from '../constants'
import axios from 'axios'

export default class SearchEngineApi {
  static infos() {
    return axios.get(`${constants.BACKEND_DOMAIN}/search_engine/infos`)
  }

  static loadDailyRankSummary(dateStart, dateEnd) {
    const query = {
      start_date: dateStart,
      end_date: dateEnd
    }
    return axios.get(`${constants.BACKEND_DOMAIN}/search_engine/daily_rank_summary`, {
      params: query
    })
  }

  static fineUploaderOptions = {
    chunking: {
      enabled: false
    },
    request: {
      endpoint: `${constants.BACKEND_DOMAIN}/csv_importer`
    },
    retry: {
      enableAuto: false
    },
    validation: {
      allowedExtensions: ['csv']
    },
    multiple: false
  }
}