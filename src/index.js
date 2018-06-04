import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter, Link, Route} from 'react-router-dom'
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

class Page1 extends React.Component{
  render() {
    return (<h1>page11</h1>)
  }
}
function Page2() {
  return (<h1>page22</h1>)
}

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/page1'}>page1</Link></li>
            <li><Link to='/page2'>page2</Link></li>
          </ul>
          {/*<App />*/}
          <Route path={'/'} exact component={App} />
          <Route path={'/page1'} component={Page1} />
          <Route path='/page2' component={Page2} />
        </div>
      </BrowserRouter>
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

