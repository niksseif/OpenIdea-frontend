import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import ImageExampleFluid from './component/image'
import IdeaCards from './component/ideaCards'
class App extends Component {
  state = {
    ideas: [
      { id: 1, title: "kim", color: "red" },
      { id: 2, title: "nik", color: "blue" },
      { id: 3, title: "john", color: "red" }
    ]
  };
  render() {
    return (
      <div className="App">
        <ImageExampleFluid />
        <Navbar />
        <IdeaCards />

      </div>
    );
  }
}

export default App;
