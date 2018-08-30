import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import HomeComp from './homeComponent'

import {
  loadRankInfos
}               from '../searchEngineRank/searchEngineAction'

const mapStateToProps = (state) => {
  return {
    rankProcessInfos: state.searchEngine.infos
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadRankInfos
}, dispatch)

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComp)

export default Home