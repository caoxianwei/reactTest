import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {
  BrowserRouter,
  // Link,
  Route,
  Redirect,
  Switch} from 'react-router-dom'
import './config'
// import './index.css';
// import 'antd-mobile/dist/antd-mobile.css';
// import App from './App';
// import {counter, addGun, removeGun} from "./index.redux";
// import { counter } from './index.redux'
import reducers from './reducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// class Page1 extends React.Component{
//   render() {
//     return (<h1>page11</h1>)
//   }
// }
// function Page2() {
//   return (<h1>page22</h1>)
// }
// class TestRoutParam extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     console.log(this.props)
//     // this.props.history.push('/')
//     return <h2>测试路由参数 pathname:{this.props.location.pathname}</h2>
//   }
// }

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/*<ul>*/}
            {/*<li><Link to={'/'}>home</Link></li>*/}
            {/*<li><Link to={'/page1'}>page1</Link></li>*/}
            {/*<li><Link to='/page2'>page2</Link></li>*/}
          {/*</ul>*/}
          {/*<App />*/}
          <Switch>
            {/*<Route path={'/'} exact component={App} />*/}
            {/*<Redirect to='/aa' />*/}
            {/*/!*<Route path={'/:location'} exact component={TestRoutParam} />*!/*/}
            {/*<Route path={'/page1'} component={Page1} />*/}
            {/*<Route path='/page2' component={Page2} />*/}
            <Route path='/login' component={Auth}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Redirect to='/dashboard'></Redirect>
          </Switch>
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

