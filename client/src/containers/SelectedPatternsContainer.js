import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deselectPattern } from '../actions'
import PatternList from '../components/PatternList'

const mapStateToProps = function(state) {
  return {
    currentPattern: state.currentPattern
  }
}

class SelectedPatternsContainer extends Component {
  render() {
    return (
      <PatternList title="Selected Patterns"
                   patterns={ [this.props.currentPattern] }
                   onChange={ (event, clickedPattern) => this.props.onChange(clickedPattern) }/>
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      onChange: (pattern) => {
        dispatch(deselectPattern(pattern))
      }
    }
  })(SelectedPatternsContainer)
