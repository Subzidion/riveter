import React, { Component } from 'react';
import FeedbackColTabSection from './FeedbackColTabSection';
import './FeedbackCol.css';

class FeedbackCol extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="feedback_col">
          <FeedbackColTabSection />
          <textarea>Placeholder</textarea>
        </div>
      );
  }
}

export default FeedbackCol;
