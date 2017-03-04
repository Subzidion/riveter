import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = function(state) {
  return {
    jsonOutput: state.jsonOutput
  }
}

class JSONOutputContainer extends Component {
  handleChange() {
    console.log("Te!!")
  }

  render() {
    return (
      <textarea value={ this.props.jsonOutput } onChange={ this.handleChange.bind(this) }></textarea>
    )
  }
}

export default connect(mapStateToProps)(JSONOutputContainer)
