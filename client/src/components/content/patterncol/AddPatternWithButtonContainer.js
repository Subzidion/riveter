import React, { Component } from 'react';
import AddPatternContainer from './AddPatternContainer';
import './AddPatternWithButtonContainer.css';

class AddPatternWithButtonContainer extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="add_pattern_with_button_container">
          <AddPatternContainer />
          <input className="button" type="button" value="Add Pattern" />
        </div>
      );
  }
}

export default AddPatternWithButtonContainer;
