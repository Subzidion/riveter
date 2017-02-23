import React, { Component } from 'react';
import FeedbackColTabSection from './FeedbackColTabSection';
import { connect } from 'react-redux';
import './FeedbackCol.css';

const mapStateToProps = function(state){
  return {
    jsonOutput: state.jsonOutput
  }
}

class FeedbackCol extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="feedback_col">
          <FeedbackColTabSection />
          <textarea>{this.props.jsonOutput}</textarea>
        </div>
      );
  }
}

export default connect(mapStateToProps)(FeedbackCol)
