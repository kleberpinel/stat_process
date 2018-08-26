import * as constants from '../constants'
import axios from 'axios'

export default class SearchEngineApi {
  static infos() {
    return axios.get(`${constants.BACKEND_DOMAIN}/search_engine/infos`)
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