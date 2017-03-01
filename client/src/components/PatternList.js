import React, { Component } from 'react'
import Pattern from './Pattern'

class PatternList extends Component {
  render() {
    let patterns = []
    if(this.props.patterns) {
      patterns = this.props.patterns.map(pattern => {
        return <Pattern pattern={ pattern } 
                        onClick={ (clickedPattern) => this.props.onClick(clickedPattern) }/>
      })
    }

    return (
      <div>
        <p>{this.props.title}</p>
        <div className="patternList">
          <ul>
            { patterns }
          </ul>
        </div>
      </div>
    )
  }
}

export default PatternList
