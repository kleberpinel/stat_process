import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'

import CsvRankUploader         from '../uploaders/csvRankUploaderContainer'

class RankImporter extends PureComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      allowUploadCSV: false
    }
  }

  renderButton = (text, style) => {
    return (
      <button
        className={`btn btn-${style}`}
        onClick={() => this.setState({ allowUploadCSV: !this.state.allowUploadCSV })} >
        { text }
      </button>
    )
  }

  render() {
    const { rankProcessInfos } =  this.props
    const { allowUploadCSV } =  this.state
    if ((rankProcessInfos && rankProcessInfos.rank_csv_files_processed === 0) || allowUploadCSV) {
      return (
        <div className="rank-importer-wrapper">
          <CsvRankUploader />
          { this.renderButton('Cancel upload', 'warning') }
        </div>
      )
    } else {
      return (
        <div className="rank-importer-wrapper">
          { this.renderButton('Upload another CSV to be processed', 'primary') }
        </div>
      )
    }
  }
}

RankImporter.propTypes = {
  rankProcessInfos: PropTypes.object,
}

export default RankImporter;