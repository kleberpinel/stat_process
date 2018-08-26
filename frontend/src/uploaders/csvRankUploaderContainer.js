import { connect }    from 'react-redux'
import { bindActionCreators } from 'redux';

import CsvRankUploaderComp       from './csvRankUploaderComponent'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const CsvRankUploader = connect(
  mapStateToProps,
  mapDispatchToProps
)(CsvRankUploaderComp)

export default withRouter(CsvRankUploader)