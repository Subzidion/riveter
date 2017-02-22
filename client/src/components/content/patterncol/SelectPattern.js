import React, { Component } from 'react';
import SelectPatternList from './SelectPatternList';

class SelectPattern extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="select_pattern">
          <p>Show Selected</p>
          <SelectPatternList />
        </div>
      );
  }
}

export default SelectPattern;
