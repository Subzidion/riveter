import React, { Component } from 'react'
import JSONOutputContainer from '../containers/JSONOutputContainer'
import './columns.css'

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
