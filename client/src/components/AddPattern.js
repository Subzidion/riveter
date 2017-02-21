import React, { Component } from 'react';

class AddPattern extends Component {
  constructor() {
    super();
    this.state = {
      newPattern: {}
    }
  }

  handleSubmit(e) {
    if(this.refs.pattern.value === '') {
      alert('Cannot submit a blank pattern.');
    }
    else {
      this.setState({newPattern: {
        pattern: this.refs.pattern.value
      }}, function() {
        this.props.addPattern(this.state.newPattern);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Pattern: </label>
          <input type="text" ref="pattern" />
          <input type="submit" value="Add Pattern" />
        </div>
      </form>
    );
  }
}

export default AddPattern;
