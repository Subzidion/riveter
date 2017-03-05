import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import * as styles from './styles'

class TextArea extends Component {
  render() {
    return (
      <div>
        <Subheader style={ styles.headingStyle }>{ this.props.title }</Subheader>
        <Paper style={ styles.paperStyle } zDepth={2} rounded={true}>
          <TextField
            name={ this.props.name }
            style={styles.textAreaStyle}
            value={ this.props.content }
            textareaStyle={ styles.textAreaStyle }
            rows={30}
            rowsMax={30}
            multiLine={true}
            onChange={ this.props.onChange }
          />
        </Paper>
      </div>
    )
  }
}

export default TextArea
