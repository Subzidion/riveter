import React, { Component } from 'react';
import CreatePattern from './CreatePattern';
import SelectPattern from './SelectPattern';
import QuickReference from './QuickReference';
import './PatternCol.css';

class PatternCol extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="pattern_col">
          <CreatePattern />
          <SelectPattern />
          <QuickReference />
        </div>
      );
  }
}

export default PatternCol;
