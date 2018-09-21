import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Square from './components/Square';
import Card from './components/Card';
import Label from './components/Label';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Card color="#FF6663"/>
        </div>
      </div>
    );
  }
}

export default App;
