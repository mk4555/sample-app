import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Box from './components/Box';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Box></Box>
          <Box></Box>
        </div>
      </div>
    );
  }
}

export default App;
