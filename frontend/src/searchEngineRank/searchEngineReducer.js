import * as constants from '../constants'

const initialState = {
  infos: null,
}

const appBehavior = (state = initialState, action) => {
  switch (action.type) {
  case constants.SEARCH_ENGINE_INFOS_LOADED:
    return {...state,
      infos: action.payload
    }
  default:
    return state
  }
}

export default appBehavior

