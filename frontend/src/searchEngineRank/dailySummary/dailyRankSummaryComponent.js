import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'

import LineGraph from './lineGraphComponent'

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates'
import moment                   from 'moment'

import 'react-dates/lib/css/_datepicker.css'

class DailyRankSummary extends PureComponent {

  constructor(props, context) {
    super(props, context);
    console.log(moment("12-25-1995", "MM-DD-YYYY"))
    this.state = {
      startDate: moment("02-01-2016", "MM-DD-YYYY"),
      endDate: moment("02-15-2016", "MM-DD-YYYY"),
      chartData: {
        labels: []
      }
    }
    this.onDatesChange = this.onDatesChange.bind(this)
  }

  componentDidMount(){
    const { startDate, endDate } = this.state
    this.props.loadDailyRankSummary(startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'))
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.dailySummary.labels) {
      this.setState({ chartData: nextProps.dailySummary })
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    if (startDate && endDate) {
      this.props.loadDailyRankSummary(startDate.format('YYYY-MM-DD'), endDate.format('YYYY-MM-DD'))
    }
    this.setState({ startDate, endDate })
  }

  renderDateRange = () => {
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
        />
      </div>
    )
  }

  renderDailySummaryGraph = () => {
    let { chartData } = this.state
    if (chartData.labels.length === 0) {
      return 'No rank registered for this period.'
    } else {
      const finalGraphData = Object.assign({}, chartData)
      return (
        <LineGraph
          graphData={finalGraphData}
        />
      )
    }
  }

  render() {
    return (
      <div className="daily-rank-summary-wrapper">
        { this.renderDateRange() }
        { this.renderDailySummaryGraph() }
      </div>
    )
  }
}

DailyRankSummary.propTypes = {
  loadDailyRankSummary: PropTypes.func
}

export default DailyRankSummary;