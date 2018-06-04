import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import './index.css';
// import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
// import {counter, addGun, removeGun} from "./index.redux";
import { counter } from './index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);
// registerServiceWorker();

// function render() {
//   ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} />, document.getElementById('root'));
// }
// render()
// store.subscribe(render)
