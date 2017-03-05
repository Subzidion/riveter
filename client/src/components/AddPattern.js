import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions'
import TextField from 'material-ui/TextField'
import AutoComplete from 'material-ui/AutoComplete'
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
  constructor(props) {
    super(props)
    this.state = {name: '', pattern: ''}
  }

  nameChange(event) {
    this.setState({name: event.target.value})
  }

  patternChange(searchText, dataSource) {
    this.setState({pattern: searchText})
  }

  render() {
    return (
      <div>
        <Subheader style={styles.headingStyle}>Add Pattern</Subheader>
        <Paper style={styles.paperStyle} zDepth={2} rounded={true}>
          <TextField style={styles.inputStyle} hintText="Name" onChange={ this.nameChange.bind(this) } />
          <br></br>
          <AutoComplete style={styles.inputStyle} hintText="Pattern" fullWidth={true} dataSource={this.props.patternList} onUpdateInput={ (searchText, dataSource) => this.patternChange(searchText, dataSource) } />
          <RaisedButton label="Add Pattern" primary={true} style={styles.buttonStyle} onClick={ () => this.props.addPattern(this.state.name, this.state.pattern) } />
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
