import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectPattern } from '../actions'
import PatternList from '../components/PatternList'

const mapStateToProps = function(state) {
  return {
    patternList: state.patternList
  }
}

class AvailablePatternsContainer extends Component {
  render() {
    return (
      <PatternList title="Available Patterns"
                   patterns={ this.props.patternList }
                   onChange={ (event, clickedPattern) => this.props.onChange(clickedPattern) }/>
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      onChange: (pattern) => {
        dispatch(selectPattern(pattern))
      }
    }
  })(AvailablePatternsContainer)
