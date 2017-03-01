import React, { Component } from 'react'
import JSONOutputContainer from '../containers/JSONOutputContainer'
import './FeedbackColumn.css'

class FeedbackColumn extends Component {
  render() {
    return (
      <div className="feedbackColumn">
        <JSONOutputContainer />
      </div>
    )
  }
}

export default FeedbackColumn
