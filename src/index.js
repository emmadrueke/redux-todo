//Index.js is 3rd

import React from 'react';
import ReactDOM from 'react-dom';
// createStore: creates a redux store. Should only be one store per app.
// if you have more than one reducer file they need to be combined into
// one file and then passed to createStore()
import { createStore } from 'redux';
// Provider: provieds redux to react files
import { Provider } from 'react-redux';
// this needs to be a file with all of your reducers
import reducers from './reducers';
import App from './App';

const store = createStore(reducers);

ReactDOM.render(
  // Need to wrap the App file in the Provider and pass it the store
  // can also be written as store={createStore(reducers)} so that you
  // get rid of the line of code above
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root'));