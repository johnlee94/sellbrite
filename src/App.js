import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCard from './components/itemCard'
import ItemCard2 from './components/itemCard2'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <ItemCard2/>
      </div>
    );
  }
}

export default App;
