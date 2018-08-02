import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import ImageExampleFluid from './component/image'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageExampleFluid />
        <Navbar />

      </div>
    );
  }
}

export default App;
