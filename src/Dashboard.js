import React from 'react';
import App from "./App";
import { Link, Route, Switch} from 'react-router-dom'
// import { connect } from 'react-redux'

class Page1 extends React.Component{
  render() {
    return (<h1>page11</h1>)
  }
}
function Page2() {
  return (<h1>page22</h1>)
}

class Dashboard extends React.Component{
  render(){
    return (
      <div>
        <ul>
          <li><Link to={'/'}>home</Link></li>
          <li><Link to={'/dashboard/page1'}>page1</Link></li>
          <li><Link to='/dashboard/page2'>page2</Link></li>
        </ul>
        {/*<App />*/}
        <Switch>
          <Route path={'/'} component={App} />
          {/*<Route path={'/:location'} exact component={TestRoutParam} />*/}
          <Route path={'/page1'} component={Page1} />
          <Route path='/page2' component={Page2} />
        </Switch>
      </div>
    )
  }
}
export default Dashboard
