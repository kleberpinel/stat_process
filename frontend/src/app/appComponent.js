import React, { PureComponent }   from 'react'
import {
  BrowserRouter as Router, Switch, Route
}                                 from 'react-router-dom'
import Home               from '../home/homeContainer'

import styles from "./app.css"

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Switch>
              <Route exact path="/"           component={Home}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App