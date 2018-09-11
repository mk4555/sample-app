import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Box from './components/Box';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Box></Box>
      </div>
    );
  }
}

export default App;
