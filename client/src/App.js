import React, { Component } from 'react';
import Patterns from './components/Patterns';
import AddPattern from './components/AddPattern';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      patterns: []
    }
  }

  getPatterns() {
    this.setState({patterns: [
      {
        pattern: 'basic.matchall'
      },
      {
        pattern: 'basic.element'
      },
      {
        pattern: 'basic.element_bracketed'
      },
      {
        pattern: 'basic.element_quoted'
      },
      {
        pattern: 'basic.datetime_patterns'
      },
      {
        pattern: 'basic.network_patterns'
      },
      {
        pattern: 'basic.punctuation'
      },
      {
        pattern: 'basic.unmatched'
      }
    ]});
  }

  componentWillMount() {
    this.getPatterns();
  }

  handleAddPattern(pattern) {
    let patterns = this.state.patterns;
    patterns.push(pattern);
    this.setState({patterns: patterns});
  }

  handleDeletePattern(pattern) {
    let patterns = this.state.patterns;
    let index = patterns.findIndex(x => x.pattern === pattern);
    patterns.splice(index, 1);
    this.setState({patterns:patterns});
  }

  render() {
    return (
      <div className="App">
        My App
        <AddPattern addPattern={this.handleAddPattern.bind(this)} />
        <Patterns patterns={this.state.patterns} onDelete={this.handleDeletePattern.bind(this)}/> 
      </div>
    );
  }
}

export default App;
