import React, { Component } from 'react'
import { connect } from 'react-redux'
import { evaluateText } from '../actions'
import TextArea from '../components/TextArea'
import HighlightedText from '../components/HighlightedText'
import RaisedButton from 'material-ui/RaisedButton'
import * as styles from '../components/styles'

const mapStateToProps = function(state) {
  return {
    currentPattern: state.currentPattern,
    hasResult: state.hasResult,
    result: state.jsonOutput
  }
}

class MainTextContainer extends Component {
  constructor() {
    super()
    this.state = {
      parseText: "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0 1 2 3 4 5 6 7 8 9\n152.7.224.9\n69.89.31.226"
    }
  }

  render() {
    if(!this.props.hasResult) {
      return (
        <div>
          <TextArea
            name="input"
            title="Test Text"
            content={ this.state.parseText }
            onChange={ (event) => this.setState({ parseText: event.target.value }) }
          />
          <RaisedButton label="Parse Text"
            primary={true}
            style={styles.buttonStyle}
            onClick={ () => this.props.onTextChange(this.props.currentPattern, this.state.parseText) }
          />
        </div>
      )
    } else {
      return (
        <div>
        <HighlightedText
          title="Test Text"
          text={ this.state.parseText }
          response={ this.props.result }
        />
        </div>
      )
    }
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
