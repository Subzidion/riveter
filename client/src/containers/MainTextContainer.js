import React, { Component } from 'react'
import { connect } from 'react-redux'
import { evaluateText } from '../actions'
import TextField from 'material-ui/TextField'

const mapStateToProps = function(state) {
  return {
    currentPattern: state.currentPattern
  }
}

const style = {
  maxHeight: '100%',
  minHeight: '100%',
  overflowY: 'scroll',
  width: '100%',
  backgroundColor: 'white',
}

class MainTextContainer extends Component {
  render() {
    return (
      <TextField
        floatingLabelText="Text for Matching"
        floatingLabelFixed={true}
        rows={30}
        style={style}
        multiLine={true}
        onChange={ (event) => this.props.onTextChange(this.props.currentPattern, event.target.value) }
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
