import { connect }    from 'react-redux'
import { bindActionCreators } from 'redux';

import RankImporterComp       from './rankImporterComponent'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

const RankImporter = connect(
  mapStateToProps,
  mapDispatchToProps
)(RankImporterComp)

export default withRouter(RankImporter)