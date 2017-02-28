import React, { Component } from 'react'
import PatternList from '../components/PatternList'

class SelectedPatternsContainer extends Component {
  render() {
    let selectedPatterns = [
      'test'
    ]
    return (
      <PatternList title="Selected Patterns" patterns={ selectedPatterns }/>
    )
  }
}

export default SelectedPatternsContainer
