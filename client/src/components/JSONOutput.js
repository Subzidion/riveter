import React, { Component } from 'react';

class JSONOutput extends Component {
  render() {
    return (
      <div className="json">
        {this.props.output}
      </div>
    );
  }
}

export default JSONOutput;
