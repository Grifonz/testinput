import React, { Component } from 'react';
import MyInput from '../src/components/input/index';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus();
  }

  render(){
    return(
      <div ref={this.inputRef} id="main">
        <MyInput />
      </div>
    )
  }
}
export default App;


