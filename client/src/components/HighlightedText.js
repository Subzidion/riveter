import React, { Component } from 'react'
import { connect } from 'react-redux'
import { backToEdit } from '../actions'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import * as styles from './styles'

class HighlightedText extends Component {
  render() {
    let resp = JSON.parse(this.props.response)
    let patterns = [resp['result']]
    let text = resp['result']['text']
    let matches = {}
    let substrings = {}
    while(patterns.length !== 0) {
      let pattern = patterns.pop()
      for(var value in pattern) {
        if(matches[pattern[value]['pos']]) {
          matches[pattern[value]['pos']].push(value)
          substrings[pattern[value]['pos']].push(pattern[value]['text'])
        } else {
          matches[pattern[value]['pos']] = [value]
          substrings[pattern[value]['pos']] = [pattern[value]['text']]
        }
        //console.log("\"" + value + "\": " + pattern[value]['text'] + " at " + pattern[value]['pos'])
        if(pattern[value]['subs']) {
          patterns = patterns.concat(pattern[value]['subs'])
        }
      }
    }
    console.log(matches)
    console.log(substrings)
    for(value in matches) {
      console.log(value)
      //console.log(text.substring((value - 1), matches[value]['length']))
    }


    return (
      <div style={ styles.resultsStyle }>
        <Subheader style={ styles.headingStyle }>{ this.props.title }</Subheader>
        <Paper style={ styles.paperStyle } zDepth={2} rounded={true}>
          <IconButton iconClassName="fa fa-arrow-circle-o-left" onClick={ () => this.props.backToEdit() } />
          <span style={ styles.highlightStyle }>{ this.props.text }</span>
        </Paper>
      </div>
    )
  }
}

export default connect(null,
  (dispatch) => {
    return {
      backToEdit: () => {
        dispatch(backToEdit())
      }
    }
  })(HighlightedText)
