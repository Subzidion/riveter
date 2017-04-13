import React, { Component } from 'react'
import { connect } from 'react-redux'
import { backToEdit } from '../actions'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import * as styles from './styles'

class HighlightedText extends Component {
  render() {
    return (
      <div>
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
