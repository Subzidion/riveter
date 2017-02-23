import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPattern } from '../../../actions';

class Pattern extends Component {
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
                dispatch(selectPattern(name))
            }
        }
    }
)(Pattern);
