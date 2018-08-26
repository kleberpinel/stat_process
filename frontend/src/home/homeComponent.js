import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'

import RankImporter        from '../searchEngineRank/rankImporterContainer'

import './landing.css'

class Home extends PureComponent {

  componentWillMount() {
    this.props.loadRankInfos()
  }

  renderSearchEngineRankProcessInfo = () => {
    const { rankProcesInfos } =  this.props
    if (rankProcesInfos) {
      return (
        <div>
          <label>CSV files processed:</label><span> {rankProcesInfos.rank_csv_files_processed}</span><br/>
          <label>Ranks processed:</label><span> {rankProcesInfos.rank_processed}</span>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>STAT - Rank Page</h1>

        { this.renderSearchEngineRankProcessInfo() }

        <RankImporter />
      </div>
    )
  }
}

Home.propTypes = {
  rankProcesInfos: PropTypes.object,
  loadRankInfos: PropTypes.func.required
}

export default Home