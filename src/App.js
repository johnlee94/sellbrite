import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCard from './components/itemCard'
import ItemCard2 from './components/itemCard2'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart/>
        <ItemCard2/>
      </div>
    );
  }
}

export default App;
