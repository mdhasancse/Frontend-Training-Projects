import React from 'react';
import './App.css';
import Application from './Application';
import Sidebar from './components/Sidebar';
import Header from './components/Header';


function App() {
  return (

    <div>
      <Header />
      <Sidebar />
      <Application />
    </div>
  );
}

export default App;

