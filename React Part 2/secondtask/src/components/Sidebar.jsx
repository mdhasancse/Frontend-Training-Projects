import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      {/* <li><i class="fa-solid fa-bars"  style={{ color: 'white' }}></i></li> */}
      <li><i className="fa-solid fa-bars" style={{ color: 'white' }}></i></li>
        <li><i class="bi bi-cloud-snow" style={{ color: 'white' }}></i></li>
        <li><i class="bi bi-people" style={{ color: 'white' }}></i></li>
        <li><i class="bi bi-bank2" style={{ color: 'white' }}></i></li>
        <li><i class="bi bi-currency-dollar" style={{ color: 'white' }}></i></li>
    

      </ul>
    </div>
  );
};

export default Sidebar;