import React, { Component } from 'react'
import { connect } from 'react-redux'
import { evaluateText } from '../actions'
import TextArea from '../components/TextArea'
import RaisedButton from 'material-ui/RaisedButton'
import * as styles from '../components/styles'

const mapStateToProps = function(state) {
  return {
    currentPattern: state.currentPattern
  }
}

class MainTextContainer extends Component {
  constructor() {
    super();
    this.state = {
      parseText: ''
    }
  }

  render() {
    return (
      <div>
        <TextArea
          name="input"
          title="Test Text"
          onChange={ () => this.setState({ parseText: event.target.value }) }
          
        />
        <RaisedButton label="Parse Text"
          primary={true}
          style={styles.buttonStyle}
          onClick={ () => this.props.onTextChange(this.props.currentPattern, this.state.parseText) }
        />
      </div> 
    )
  }
}

export default connect(mapStateToProps,
  (dispatch) => {
    return {
      onTextChange: (pattern, text) => {
        dispatch(evaluateText(pattern, text))
      }
    }
  })(MainTextContainer)
