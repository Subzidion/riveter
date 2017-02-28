import React, { Component } from 'react'
import PatternList from '../components/PatternList'

class AvailablePatternsContainer extends Component {
  render() {
    let availablePatterns = [
      'basic.matchall',
      'basic.element',
      'basic.element_bracketed',
      'basic.element_quoted',
      'basic.datetime_patterns',
      'basic.network_patterns',
      'basic.punctuation',
      'basic.unmatched'
    ]
    return (
      <PatternList title="Available Patterns" patterns={ availablePatterns }/>
    )
  }
}

export default AvailablePatternsContainer
