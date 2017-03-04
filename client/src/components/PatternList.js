import React, { Component } from 'react'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader';

const SelectableList = makeSelectable(List)

const listStyle = {
  height: '25vh',
  overflowY: 'scroll',
  margin: 5,
  textAlign: 'left',
}

const headingStyle = {
  fontSize: '1.25em',
  color: 'white',
}

class PatternList extends Component {
  render() {
    let patterns = []
    if(this.props.patterns) {
      patterns = this.props.patterns.map(pattern => {
        return <ListItem key={ pattern } value={ pattern } primaryText={ pattern }/>
      })
    }

    return (
      <div>
        <Subheader style={headingStyle}>{ this.props.title }</Subheader>
        <Paper style={listStyle} zDepth={2} rounded={true}>
          <SelectableList onChange={this.props.onChange }>
            { patterns }
          </SelectableList>
        </Paper>
      </div>
    )
  }
}

export default PatternList
