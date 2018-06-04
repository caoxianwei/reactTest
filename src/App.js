import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './es6'
import {Button} from 'antd-mobile'
// import {createStore} from 'redux'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

// function counter(state = 0, action) {
//   switch (action.type) {
//     case '加机关枪':
//       return state +1
//     case '减机关枪':
//       return state - 1
//     default:
//       return 10
//   }
// }
// const store = createStore(counter)
// const init = store.getState()
// console.log(init)
// function listener(){
//   const current = store.getState()
//   console.log(`现在有机关枪${current}把`)
// }
//
// store.subscribe(listener)
//
// store.dispatch({type: '加机关枪'})
// store.dispatch({type: '加机关枪'})
// store.dispatch({type: '加机关枪'})
// store.dispatch({type: '加机关枪'})
// console.log(store.getState())

// const mapStatetoProps = (state)=>{
//   return {num: state}
// }
// const actionCreators = {addGun, removeGun, addGunAsync}
// App = connect(mapStatetoProps, actionCreators)(App)
// mapStatetoProps, actionCreators
@connect(
  state=>({num: state}),
  {addGun, removeGun, addGunAsync}
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '珠子', '王跟神']
    }
  }
  componentWillMount(){
    console.log('this is componentWillMount')
  }
  componentDidMount(){
    console.log('this is componentDIdMount')
  }
  // add(){
  add= () =>{
    console.log('this add data')
    this.setState({
      solders: [...this.state.solders, '新表哥'+Math.random(10)]
    })
  }
  render() {
    console.log('this is render')
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    // const store = this.props.store
    // const num = store.getState()
    // const num = this.props.num
    // const addGun = this.props.addGun
    // const removeGun = this.props.removeGun
    let boss = 'title :name'
    return (
      <div>
        <h1>sunday test{boss}</h1>
        <Yiyi max={'paipai'}></Yiyi>
        <Funttt title="标题"></Funttt>
        {this.state.solders.map(item => {
          return <li key={item}>{item}</li>
        })}
        <Button onClick={() =>this.add()}>新增</Button>
        <Button onClick={this.add}>新增</Button>
        <div>
          <h1>现有机枪{this.props.num}把</h1>
          {/*<button onClick={()=> store.dispatch(addGun())}>加枪</button>*/}
          {/*<button onClick={()=> store.dispatch(removeGun())}>上交</button>*/}
          <button onClick={this.props.addGun}>加枪</button>
          <button onClick={this.props.removeGun}>上交</button>
          <button onClick={this.props.addGunAsync}>推迟</button>
        </div>
      </div>
    )
  }
}

function Funttt(props) {
  return <h1>this is function . props = {props.title}</h1>
}

class Yiyi extends React.Component {
  render() {
    let boss = 'pugi'
    return (
      <div>
        <p>props: {this.props.max}</p>
        <h2>yiyi sunday test{boss}</h2>
      </div>
    )
  }
}

export default App;
