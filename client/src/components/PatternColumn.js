import React, { Component } from 'react'
import AddPatternContainer from '../containers/AddPatternContainer'
import AvailablePatternsContainer from '../containers/AvailablePatternsContainer'
import SelectedPatternsContainer from '../containers/SelectedPatternsContainer'

import './PatternColumn.css'

class PatternColumn extends Component {
  render() {
    return (
      <div className="patternColumn">
        <AddPatternContainer />
        <SelectedPatternsContainer />
        <AvailablePatternsContainer />
      </div>
    )
  }
}

export default PatternColumn
