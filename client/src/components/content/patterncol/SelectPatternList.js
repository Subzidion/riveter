import React, { Component } from 'react';

class SelectPatternList extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="selected_pattern_list_container">
          <ul></ul>
        </div>
      );
  }
}

export default SelectPatternList;
