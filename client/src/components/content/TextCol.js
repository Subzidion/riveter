import React, { Component } from 'react';
import TextColTabSection from './TextColTabSection';
import './TextCol.css';
import { changeText } from '../../actions';
import { connect } from 'react-redux';

class TextCol extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="text_col">
          <TextColTabSection />
          <textarea  onChange={(event) => this.props.onTextChange(event.target.value)}></textarea>
        </div>
      );
  }
}

export default connect(null,
    (dispatch) => {
        return {
            onTextChange: (text) => {
                dispatch(changeText(text))
            }
        }
    }
)(TextCol);
