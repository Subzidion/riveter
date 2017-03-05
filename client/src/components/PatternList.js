import React, { Component } from 'react'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import * as styles from './styles'

const SelectableList = makeSelectable(List)

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
        <Subheader style={ styles.headingStyle }>{ this.props.title }</Subheader>
        <Paper style={ styles.patternListStyle } zDepth={2} rounded={true}>
          <SelectableList onChange={this.props.onChange }>
            { patterns }
          </SelectableList>
        </Paper>
      </div>
    )
  }
}

export default PatternList
