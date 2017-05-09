import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import JSONPretty from 'react-json-pretty'
import * as styles from '../components/styles'

const mapStateToProps = function(state) {
  return {
    hasResult: state.hasResult,
    jsonOutput: state.jsonOutput
  }
}

class JSONOutputContainer extends Component {
  render() {
    if(this.props.hasResult) {
      return (
        <div>
          <Subheader style={ styles.headingStyle }>Output</Subheader>
          <Paper style={ styles.paperStyle } zDepth={2} rounded={true}>
            <JSONPretty
              style={{ color: "black", width: 700, overflow: "auto", maxHeight: 700 }}
              json={ this.props.jsonOutput }
            />
          </Paper>
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(JSONOutputContainer)
