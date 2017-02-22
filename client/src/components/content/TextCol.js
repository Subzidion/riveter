import React, { Component } from 'react';
import TextColTabSection from './TextColTabSection';
import './TextCol.css';

class TextCol extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="text_col">
          <TextColTabSection />
          <textarea></textarea>
        </div>
      );
  }
}

export default TextCol;
