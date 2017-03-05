import React, { Component } from 'react'
import MainTextContainer from '../containers/MainTextContainer'
import './columns.css'

class TextColumn extends Component {
  render() {
    return (
      <div className="textColumn">
        <MainTextContainer />
      </div>
    )
  }
}

export default TextColumn
