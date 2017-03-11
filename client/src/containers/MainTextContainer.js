import React, { Component } from 'react'
import { connect } from 'react-redux'
import { evaluateText } from '../actions'
import TextArea from '../components/TextArea'

const mapStateToProps = function(state) {
  return {
    currentPattern: state.currentPattern
  }
}

class MainTextContainer extends Component {
  render() {
    return (
      <TextArea
        name="input"
        title="Test Text"
      />
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
