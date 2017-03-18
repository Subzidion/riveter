import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import * as styles from './styles'

const mapStateToProps = function(state) {
  return {
    patternList: state.patternList
  }
}

class AddPattern extends Component {
  render() {
    return (
      <div>
        <Subheader style={styles.headingStyle}>Add Pattern</Subheader>
        <Paper style={styles.paperStyle} zDepth={2} rounded={true}>
          <TextField ref="name" style={styles.inputStyle} hintText="Name" />
          <TextField ref="pattern" style={styles.inputStyle} hintText="Pattern" fullWidth={true} />
          <RaisedButton label="Add Pattern" primary={true} style={styles.buttonStyle} onClick={ () => this.props.addPattern(this.refs.name.input.value, this.refs.pattern.input.value) } />
        </Paper>
      </div>
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      addPattern: (name, pattern) => {
        dispatch(addPattern(name, pattern))
      }
    }
  })(AddPattern)
