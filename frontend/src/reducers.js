import { combineReducers } from 'redux'

import searchEngine from './searchEngineRank/searchEngineReducer'

const interviewApp = combineReducers({
  searchEngine
})

export default interviewApp