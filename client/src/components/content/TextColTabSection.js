import React, { Component } from 'react';
import './TextColTabSection.css';

class TextColTabSection extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    // should this html be split up more? file for tabs and file for button?
      return (
        <div className="text_col_tab_section">
           <ul className="tab_list">
             <li className="tab">Main Parse</li>
             <li className="tab">Test Pattern</li>
           </ul>
          <input className="button" type="button" value="Upload Files" />
        </div>
      );
  }
}

export default TextColTabSection;
