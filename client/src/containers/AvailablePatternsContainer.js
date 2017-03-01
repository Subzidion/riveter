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
                   onClick={ (clickedPattern) => this.props.onClick(clickedPattern) }/>
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      onClick: (pattern) => {
        dispatch(selectPattern(pattern))
      }
    }
  })(AvailablePatternsContainer)
  
