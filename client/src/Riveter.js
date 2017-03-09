import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {indigo600} from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RiveterReducer from './reducers'
import Header from './components/Header'
import PatternColumn from './components/PatternColumn'
import TextColumn from './components/TextColumn'
import FeedbackColumn from './components/FeedbackColumn'
import './Riveter.css'

injectTapEventPlugin()

const store = createStore(
  RiveterReducer,
  applyMiddleware(thunkMiddleware)
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo600
  },
  appBar: {
    height: 50
  }
})

class Riveter extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <div className="container">
            <Header />
            <div className="content">
              <PatternColumn />
              <TextColumn />
              <FeedbackColumn />
            </div>
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default Riveter
