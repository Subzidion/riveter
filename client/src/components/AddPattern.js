import React, { Component } from 'react'
import './AddPattern.css'

class AddPattern extends Component {
  render() {
    return (
      <div>
        <p>Create Pattern</p>
        <div className="addPattern">
          <input type="text" placeholder="Name" onChange={ this.props.nameChange } />
          <textarea plpaceholder="Pattern" onChange={this.props.patternChange }></textarea>
        </div>
        <input className="button" type="button" value="Add Pattern" onClick={ this.props.addPattern } />
      </div>
    )
  }
}

export default AddPattern
