import React, { Component } from 'react';

class PatternItem extends Component {
  deletePattern(pattern) {
    this.props.onDelete(pattern);
  }

  handlePatternChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="radio">
        <label>
          <input type="radio" name="pattern"
                value={this.props.patternItem.pattern} 
                checked={this.props.selectedPattern === this.props.patternItem.pattern}
                onChange={this.handlePatternChange.bind(this)} />
          <strong>{this.props.patternItem.pattern}</strong>
        </label>
        <a href="#" onClick={this.deletePattern.bind(this, this.props.patternItem.pattern)}>X</a>
      </div>
    );
  }
}

export default PatternItem;
