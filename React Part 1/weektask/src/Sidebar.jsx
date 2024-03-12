// Sidebar.js
import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li> <i class="bi bi-cloud-snow"></i></li>
        <li><i class="bi bi-people"></i></li>
        <li><i class="bi bi-bank2"></i></li>
        <li><i class="bi bi-currency-dollar"></i></li>
      </ul>
    </div>
  );
};

export default Sidebar;
