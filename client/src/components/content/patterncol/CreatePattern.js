import React, { Component } from 'react';
import AddPatternWithButtonContainer from './AddPatternWithButtonContainer';

class CreatePattern extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div>
          <p>Create Pattern</p>
          <AddPatternWithButtonContainer />
          <input className="button" type="button" value="Upload Patterns" />
        </div>
      );
  }
}

export default CreatePattern;
