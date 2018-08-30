import { connect }    from 'react-redux'
import { bindActionCreators } from 'redux';

import DailyRankSummaryComp       from './dailyRankSummaryComponent'
import { withRouter } from 'react-router-dom'

import {
  loadDailyRankSummary
}                             from '../searchEngineAction'

const mapStateToProps = (state) => {
  return {
    dailySummary: state.searchEngine.dailySummary
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loadDailyRankSummary
}, dispatch)

const DailyRankSummary = connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyRankSummaryComp)

export default withRouter(DailyRankSummary)