import React, { Component } from 'react';
import PatternItem from './PatternItem';

class Patterns extends Component {
  deletePattern(pattern) {
    this.props.onDelete(pattern);
  }

  render() {
    let patternItems;
    if(this.props.patterns) {
      patternItems = this.props.patterns.map(pattern => {
        return (
          <PatternItem key={pattern.pattern} pattern={pattern} onDelete={this.deletePattern.bind(this)} />
        );
      });
    }
    return (
    <div className="patterns">
      <h3>Patterns</h3>
      {patternItems}
    </div>
    );
  }
}

export default Patterns;
