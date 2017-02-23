import React, { Component } from 'react';
import Pattern from './Pattern';
import { connect } from 'react-redux';

const mapStateToProps = function(state){
  return {
    patternList: state.patternList
  }
}

class SelectPatternList extends Component {
  constructor(props) {
      super(props);
  }

  renderList() {
    let list = [];
    for (let i = 0; i < this.props.patternList.length; i++) {
        list.push(
            <Pattern name={this.props.patternList[i].name} />
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

export default connect(mapStateToProps)(SelectPatternList)
