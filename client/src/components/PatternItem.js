import React, { Component } from 'react';

class PatternItem extends Component {
  deletePattern(pattern) {
    this.props.onDelete(pattern);
  }

  render() {
    return (
      <li className="Pattern">
        <strong>{this.props.pattern.pattern}</strong> <a href="#" onClick={this.deletePattern.bind(this, this.props.pattern.pattern)}>X</a>
      </li>
    );
  }
}

export default PatternItem;
