import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPattern } from '../../../actions';

class ReferencePattern extends Component {
  constructor(props) {
      super(props);
  }
  render() {
      return <li onClick={() => this.props.onPatternClick(this.props.name)}>{this.props.name}</li>;
  }
}

export default connect(null,
    (dispatch) => {
        return {
            onPatternClick: (name) => {
                dispatch(addPattern(name, name))
            }
        }
    }
)(ReferencePattern);
