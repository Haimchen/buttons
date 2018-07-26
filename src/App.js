import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: 'yellow',
    }
  }

  changeColor = (color) => {
    this.setState({ color })
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <h2>
          Buttons, Buttons!
        </h2>
        <div>
          <Button color={'green'} onClick={this.changeColor}>Green</Button>
          <Button color={'blue'} onClick={this.changeColor}>Blue</Button>
          <Button color={'red'} onClick={this.changeColor}>Red</Button>
        </div>
      </div>
    );
  }
}

export default App;
