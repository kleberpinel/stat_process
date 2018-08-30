import * as constants from '../constants'

const initialState = {
  infos: null,
  dailySummary: {
    labels: []
  }
}

const appBehavior = (state = initialState, action) => {
  switch (action.type) {
  case constants.SEARCH_ENGINE_INFOS_LOADED:
    return {...state,
      infos: action.payload
    }
  case constants.SEARCH_ENGINE_DAILY_SUMMARY_LOADED:
    return {...state,
      dailySummary: action.payload
    }
  default:
    return state
  }
}

export default appBehavior

