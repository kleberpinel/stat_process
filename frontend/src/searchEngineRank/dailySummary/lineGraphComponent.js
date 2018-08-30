import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'

import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

// Disable animating charts by default.
defaults.global.animation = false;

class LineGraph extends PureComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const options = {
      bezierCurve: false,
    }
    return (
      <div className="line-graph-wrapper">
        <Line data={this.props.graphData} options={options} width={600} height={250} />
      </div>
    )
  }
}

LineGraph.propTypes = {
  graphData: PropTypes.object
}

export default LineGraph;