import React from 'react';
import App from "./App";
import { Link, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux.js'

class Page1 extends React.Component{
  render() {
    return (<h1>page11</h1>)
  }
}
function Page2() {
  return (<h1>page22</h1>)
}

@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends React.Component{
  render(){
    const match = this.props.match
    console.log(match)
    console.log(this.props)
    const redirectToLogin = <Redirect to='/login'></Redirect>
    return (
      <div>
        <h1>this is mune</h1>
        {this.props.isAuth? <button onClick={this.props.logout}>注销</button>:null}
        <ul>
          <li><Link to={'/dashboard/'}>home</Link></li>
          <li><Link to={'/dashboard/page1'}>page1</Link></li>
          <li><Link to='/dashboard/page2'>page2</Link></li>
        </ul>
        {/*<App />*/}
        {/*<Switch>*/}
          <Route path={'/dashboard/'} exact component={App} />
          {/*<Route path={'/:location'} exact component={TestRoutParam} />*/}
          <Route path={'/dashboard/page1'} component={Page1} />
          <Route path='/dashboard/page2' component={Page2} />
        {/*</Switch>*/}
      </div>
    )
  }
}
export default Dashboard
