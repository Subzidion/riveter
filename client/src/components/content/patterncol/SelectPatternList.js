import React, { Component } from 'react';
import Pattern from './Pattern';
import { connect } from 'react-redux';

class SelectPatternList extends Component {
  constructor(props) {
      super(props);
  }
  renderList() {
    let patternList = [
      "basic.matchall",
      "basic.element",
      "basic.element_bracketed",
      "basic.element_quoted",
      "basic.datetime_patterns",
      "basic.network_patterns",
      "basic.punctuation",
      "basic.unmatched"
    ];
    let list = [];
    for (let i = 0; i < patternList.length; i++) {
        list.push(
            <Pattern name={patternList[i]} />
        );
    }
    return <ul>{list}</ul>;
  }
  render() {
      return (
        <div className="selected_pattern_list_container">
          {this.renderList()}
        </div>
      );
  }
}

export default connect(
    (state) => {
        return {
            patternList: state.patternList
        }
	    }
)(SelectPatternList);
