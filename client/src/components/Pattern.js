import React, { Component } from 'react'

class Pattern extends Component {
  render() {
    return (
      <li onClick={ () => this.props.onClick(this.props.pattern) }>
        {this.props.pattern}
      </li>
    )
  }
}

export default Pattern
