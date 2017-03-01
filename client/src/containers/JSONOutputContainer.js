import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = function(state) {
  return {
    jsonOutput: state.jsonOutput
  }
}

class JSONOutputContainer extends Component {
  render() {
    return (
      <textarea value={ this.props.jsonOutput }></textarea>
    )
  }
}

export default connect(mapStateToProps)(JSONOutputContainer)
