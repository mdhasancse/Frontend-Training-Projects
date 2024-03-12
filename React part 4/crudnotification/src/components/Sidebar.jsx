import React, { Component } from 'react';
import '../styles/Sidebar.css'; 

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          {/* <li><i class="fa-solid fa-bars"  style={{ color: 'white' }}></i></li> */}
          <li><i className="fa-solid fa-bars" style={{ color: 'white' }}></i></li>
          <li><i className="bi bi-cloud-snow" style={{ color: 'white' }}></i></li>
          <li><i className="bi bi-people" style={{ color: 'white' }}></i></li>
          <li><i className="bi bi-bank2" style={{ color: 'white' }}></i></li>
          <li><i className="bi bi-currency-dollar" style={{ color: 'white' }}></i></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
