import React, { Component } from 'react'
import MainTextContainer from '../containers/MainTextContainer'
import './TextColumn.css'

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
