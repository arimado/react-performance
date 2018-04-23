import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  _addOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  _addZero = () => {
    this.setState({
      count: this.state.count + 0
    })
  }

  render() {
    return <div>
      <Count count={this.state.count}/>
      <button onClick={this._addOne}>Add 1</button>
      <button onClick={this._addZero}>Add 0</button>
    </div>
  }
}

class Count extends Component {
  render() {
    return <h1>{this.props.count}</h1>
  }
}

export default App