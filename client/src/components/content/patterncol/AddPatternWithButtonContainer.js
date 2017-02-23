import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPattern } from '../../../actions';
import './AddPatternWithButtonContainer.css';

class AddPatternWithButtonContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', pattern: ''};
      this.handleChangePattern = this.handleChangePattern.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
  }
  handleChangeName(event) {
     this.setState({name: event.target.value});
  }
  handleChangePattern(event) {
     this.setState({pattern: event.target.value});
  }
  render() {
      return (
        <div className="add_pattern_with_button_container">
          <div className="add_pattern_container">
            <input type="text" placeholder="Name" onChange={this.handleChangeName} />
            <textarea placeholder="Pattern"  onChange={this.handleChangePattern}></textarea>
          </div>
          <input className="button" type="button" value="Add Pattern" onClick={() => this.props.onAddButtonClick(this.state.name, this.state.pattern)} />
        </div>
      );
  }
}

export default connect(null,
    (dispatch) => {
        return {
            onAddButtonClick: (name, pattern) => {
                dispatch(addPattern(name, pattern))
            }
        }
    }
)(AddPatternWithButtonContainer);
