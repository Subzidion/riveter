import React, { Component } from 'react'
import { connect } from 'react-redux'
import { evaluateText } from '../actions'

const mapStateToProps = function(state) {
  return {
    currentPattern: state.currentPattern
  }
}

class MainTextContainer extends Component {
  render() {
    return (
      <textarea onChange={ (event) => this.props.onTextChange(this.props.currentPattern, event.target.value) }></textarea>
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      onTextChange: (pattern, text) => {
        dispatch(evaluateText(pattern, text))
      }
    }
  })(MainTextContainer)
