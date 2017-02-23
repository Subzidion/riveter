import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPattern } from '../../../actions';
import './AddPatternContainer.css';

class AddPatternContainer extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
        <div className="add_pattern_container">
          <input type="text" placeholder="Name" />
          <textarea placeholder="Pattern"></textarea>
        </div>
      );
  }
}

export default connect(null,
    (dispatch) => {
        return {
            onPatternClick: (name) => {
                dispatch(addPattern(name))
            }
        }
    }
)(AddPatternContainer);
