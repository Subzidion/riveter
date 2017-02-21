import React, { Component } from 'react';
import $ from 'jquery';

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
    var data = {
      pattern: this.state.selectedPattern, 
      textContent: this.refs.textContent.value
    }
    console.log(data);
    if(this.refs.textContent.value === '') {
      alert('Cannot submit a blank pattern.');
    }
    else {
      console.log("Hitting server...");
      $.ajax({
        url: 'http://localhost:5000/api/v1/process/',
        type: 'POST',
        data: data,
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("SUCCESS: " + JSON.stringify(data));
        },
        error: function(xhr, status, err) {
          console.log("ERR: " + err);
        }
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
