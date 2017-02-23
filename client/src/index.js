/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reduxApp from './reducers';
import './index.css';

const store = createStore(reduxApp);

class BaseApp extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<BaseApp />, document.getElementById('root'));
