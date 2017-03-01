import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPattern } from '../actions'
import './AddPattern.css'

class AddPattern extends Component {
  constructor(props) {
    super(props)
    this.state = {name: '', pattern: ''}
  }

  nameChange(event) {
    this.setState({name: event.target.value})
  }

  patternChange(event) {
    this.setState({pattern: event.target.value})
  }

  render() {
    return (
      <div>
        <p>Create Pattern</p>
        <div className="addPattern">
          <input type="text" placeholder="Name" onChange={ this.nameChange.bind(this) } />
          <textarea placeholder="Pattern" onChange={this.patternChange.bind(this) }></textarea>
        </div>
        <input className="button" type="button" value="Add Pattern" onClick={ () => this.props.addPattern(this.state.name, this.state.pattern) } />
      </div>
    )
  }
}

export default connect(null,
  (dispatch) => {
    return {
      addPattern: (name, pattern) => {
        dispatch(addPattern(name, pattern))
      }
    }
  })(AddPattern)
