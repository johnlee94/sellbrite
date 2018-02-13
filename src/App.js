import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCard from './components/itemCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemCard/>
      </div>
    );
  }
}

export default App;
