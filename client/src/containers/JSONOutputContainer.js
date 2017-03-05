import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextArea from '../components/TextArea'

const mapStateToProps = function(state) {
  return {
    jsonOutput: state.jsonOutput
  }
}

class JSONOutputContainer extends Component {
  render() {
    return (
      <TextArea
        name="ouput"
        title="Output"
        content={ this.props.jsonOutput }
      />
    )
  }
}

export default connect(mapStateToProps)(JSONOutputContainer)
