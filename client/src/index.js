import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// 1. import from react-redux and redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index-reducers'
// 2. create user reducer function

// 3. combine multiple reducers

// 4. create redux store
const store = createStore(rootReducer, composeWithDevTools())
// 5. provide redux store to the entire app

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


