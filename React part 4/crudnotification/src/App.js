import React, { Component } from 'react';
import './App.css';
import Application from './components/Application';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Application />
      </div>
    );
  }
}

export default App;
