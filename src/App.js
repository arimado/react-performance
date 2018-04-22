import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    count: 0
  }

  _click = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  _nothing = () => {
    this.setState({
      count: this.state.count
    })
  }

  render() {
    return <div>
      <Count count={this.state.count}/>
      <button onClick={this._click}>+</button>
      <button onClick={this._nothing}>Nothing</button>
    </div>
  }
}

class Count extends PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.count !== nextProps.count;
  }
  render() {
    return <h1>{this.props.count}</h1>
  }
}

export default App