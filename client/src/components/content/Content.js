import React, { Component } from 'react';
import PatternCol from './patterncol/PatternCol';
import TextCol from './TextCol';
import FeedbackCol from './FeedbackCol';
import './Content.css';

class Content extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="container">
          <PatternCol />
          <TextCol />
          <FeedbackCol />
        </div>
      );
  }
}

export default Content;
