import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './es6'
import {Button} from 'antd-mobile'

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
    let boss = '李云龙'
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
