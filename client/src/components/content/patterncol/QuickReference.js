import React, { Component } from 'react';
import QuickReferenceList from './QuickReferenceList';

class QuickReference extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="quick_reference">
          <p>Quick Reference</p>
          <QuickReferenceList />
        </div>
      );
  }
}

export default QuickReference;
