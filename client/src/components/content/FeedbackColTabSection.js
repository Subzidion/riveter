import React, { Component } from 'react';

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
