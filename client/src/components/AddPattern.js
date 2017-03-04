import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions'
import TextField from 'material-ui/TextField'
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'

const nameStyle = {
  backgroundColor: 'white',
  width: '100%',
}

const patternStyle = {
  backgroundColor: 'white',
  width: '100%',
}

const buttonStyle = {
  position: 'absolute',
  bottom: 15,
  right: 15,
  float: 'right',
}

const listStyle = {
  height: '20vh',
  margin: 5,
  textAlign: 'left',
  position: 'relative',
}

const headingStyle = {
  fontSize: '1.25em',
  color: 'white',
}

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
        <Subheader style={headingStyle}>Add Pattern</Subheader>
        <Paper style={listStyle} zDepth={2} rounded={true}>
          <TextField style={nameStyle} hintText="Name" onChange={ this.nameChange.bind(this) } />
          <br></br>
          <AutoComplete style={patternStyle} hintText="Pattern" dataSource={this.props.patternList} onUpdateInput={ (searchText, dataSource) => this.patternChange(searchText, dataSource) } />
          <RaisedButton label="Add Pattern" primary={true} style={buttonStyle} onClick={ () => this.props.addPattern(this.state.name, this.state.pattern) } />
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
