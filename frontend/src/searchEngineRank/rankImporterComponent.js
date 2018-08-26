import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'

import CsvRankUploader         from '../uploaders/csvRankUploaderContainer'

class RankImporter extends PureComponent {

  render() {
    return (
      <div>
        Let's import your metrics to be processed.

        <CsvRankUploader />
      </div>
    );
  }
}

RankImporter.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default RankImporter;