import { connect } from 'react-redux'

import AppComponent from './appComponent'

// const mapStateToProps = (state) => {
//   return {
//   }
// }

const App = connect()(AppComponent)

export default App