import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RiveterStore from './reducers'
import Header from './components/Header'
import PatternColumn from './components/PatternColumn'
import TextColumn from './components/TextColumn'
import FeedbackColumn from './components/FeedbackColumn'
import './index.css'

const store = createStore(RiveterStore)

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
