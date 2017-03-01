import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import RiveterReducer from './reducers'
import Header from './components/Header'
import PatternColumn from './components/PatternColumn'
import TextColumn from './components/TextColumn'
import FeedbackColumn from './components/FeedbackColumn'
import './index.css'

const store = createStore(
  RiveterReducer,
  applyMiddleware(thunkMiddleware)
)
class BaseApp extends Component {
  render() {
    return (
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
    )
  }
}

ReactDOM.render(<BaseApp />, document.getElementById('root'))
