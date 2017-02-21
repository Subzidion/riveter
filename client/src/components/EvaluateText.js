import React, { Component } from 'react';
import axios from 'axios';

import Patterns from './Patterns';

class EvaluateText extends Component {
  constructor() {
    super();
    this.state = {
      selectedPattern: 'basic.matchall'
    }
  }

  deletePattern(pattern) {
    this.props.onDelete(pattern);
  }

  changePattern(pattern) {
    this.setState({
      selectedPattern: pattern
    }, function() {
      console.log(pattern);
    });
  }

  handleSubmit(e) {
    if(this.refs.textContent.value === '') {
      alert('Cannot submit a blank pattern.');
    }
    else {
      console.log("Hitting server...");
      axios.post('/api/v1/process/', {
        pattern: this.state.selectedPattern,
        textContent: this.refs.textContent.value
      })
        .then(function(data) {
          console.log("SUCCESS!: " + JSON.stringify(data));
        })
        .catch(function(err) {
          console.log("ERROR: " + err);
      });
      e.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <br />
        <div>
          <label>Pattern: </label>
          <textarea ref="textContent" />
          <input type="submit" value="Evaluate" />
        </div>
        <Patterns patterns={this.props.patterns} 
                  onChange={this.changePattern.bind(this)}
                  onDelete={this.deletePattern.bind(this)} 
                  selectedPattern={this.state.selectedPattern} />
      </form>
    );
  }
}

export default EvaluateText;
