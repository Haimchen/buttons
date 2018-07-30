import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      buttons: [
        {
          color: 'green',
          label: 'Paint it green',
        },
        {
          color: 'blue',
          label: 'Paint it blue',
        },
        {
          color: 'red',
          label: 'Paint it red',
        }
      ],
      selectedButton: 'green',
    }
  }

  changeColor = (color) => {
    this.setState({ selectedButton: color })
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.selectedButton }}>
        <h2>
          Buttons, Buttons!
        </h2>
        <div>
          {this.state.buttons.map(button =>
            <Button color={button.color} onClick={this.changeColor}>{button.label}</Button>  
          )}
        </div>
      </div>
    );
  }
}

export default App;
