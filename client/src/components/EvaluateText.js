import React, { Component } from 'react';
import $ from 'jquery';

class EvaluateText extends Component {
  constructor() {
    super();
    this.state = {
      newPattern: {}
    }
  }

  handleSubmit(e) {
    var data = {
      pattern: 'basic.matchall',
      textContent: 'Hello, world!'
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
      </form>
    );
  }
}

export default EvaluateText;
