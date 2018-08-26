import * as constants from '../constants'
import searchEngineApi from './searchEngineApi'

export const successInfos = (data) => {
  return {
    type: constants.SEARCH_ENGINE_INFOS_LOADED,
    payload: data
  }
}

export const fail = (data) => {
  return {
    type: constants.SEARCH_ENGINE_FAIL,
    payload: data
  }
}

export const loadRankInfos = (file) => dispatch => {
  return searchEngineApi.infos()
    .then(response => dispatch(successInfos(response.data)))
    .catch(error => dispatch(fail(error)))
}