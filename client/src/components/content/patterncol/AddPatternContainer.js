import React, { Component } from 'react';
import './AddPatternContainer.css';

class AddPatternContainer extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="add_pattern_container">
          <input type="text" placeholder="Name" />
          <textarea placeholder="Pattern"></textarea>
        </div>
      );
  }
}

export default AddPatternContainer;
