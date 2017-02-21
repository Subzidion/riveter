import React, { Component } from 'react';
import PatternItem from './PatternItem';

class Patterns extends Component {
  deletePattern(pattern) {
    this.props.onDelete(pattern);
  }

  changePattern(pattern) {
    this.props.onChange(pattern);
  }

  render() {
    let patternItems;
    if(this.props.patterns) {
      patternItems = this.props.patterns.map(patternItem => {
        return (
          <PatternItem key={patternItem.pattern} patternItem={patternItem} 
                       onDelete={this.deletePattern.bind(this)} 
                       onChange={this.changePattern.bind(this)}
                       selectedPattern={this.props.selectedPattern} />
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
