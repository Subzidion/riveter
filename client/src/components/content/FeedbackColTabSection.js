import React, { Component } from 'react';
import { feedbackColTabSelect } from '../../actions';
import { connect } from 'react-redux';

class FeedbackColTabSection extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div>
          <ul className="tab_list">
            <li className="tab">Explanation</li>
            <li className="tab">JSON Dump</li>
          </ul>
        </div>
      );
  }
}

export default FeedbackColTabSection;
