import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'

import RankImporter             from '../searchEngineRank/rankImporterContainer'
import DailyRankSummary         from '../searchEngineRank/dailySummary/dailyRankSummaryContainer'

import './landing.css'

class Home extends PureComponent {

  componentWillMount() {
    this.props.loadRankInfos()
  }

  renderSearchEngineRankProcessInfo = () => {
    const { rankProcessInfos } =  this.props
    if (rankProcessInfos) {
      return (
        <div>
          <label>CSV files processed:</label>
          <span> {rankProcessInfos.rank_csv_files_processed}</span><br/>
          <label>Ranks processed:</label><span> {rankProcessInfos.rank_processed}</span>
        </div>
      )
    }
  }

  render() {
    const { rankProcessInfos } =  this.props
    return (
      <div>
        <h1>STAT - Rank Page</h1>
        { this.renderSearchEngineRankProcessInfo() }

        <RankImporter
          rankProcessInfos={rankProcessInfos}
        />

        <DailyRankSummary />
      </div>
    )
  }
}

Home.propTypes = {
  rankProcessInfos: PropTypes.object,
  loadRankInfos: PropTypes.func
}

export default Home