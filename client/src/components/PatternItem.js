import React, { Component } from 'react';

class PatternItem extends Component {
  deletePattern(pattern) {
    this.props.onDelete(pattern);
  }

  render() {
    return (
      <div>
      <label><input className="Pattern" type="checkbox" value={this.props.pattern.pattern} />
        <strong>{this.props.pattern.pattern}</strong></label> <a href="#" onClick={this.deletePattern.bind(this, this.props.pattern.pattern)}>X</a>
      </div>
    );
  }
}

export default PatternItem;
