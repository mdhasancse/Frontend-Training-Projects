import React from 'react';
import './Sidebar.css'
const Sidebar = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <div>
    <ul className="left-nav left-sidebar">
        <li>
            <span><i class="bi bi-cloud-snow icons"></i></span>
        </li>
        <li>
            <span><i class="bi bi-people icons"></i></span>
        </li>
        <li>
            <span><i class="bi bi-bank2 icons"></i></span>
        </li>
        <li>
            <span><i class="bi bi-currency-dollar icons"></i></span>
        </li>
    </ul>
  </div>
  );
};
 
export default Sidebar;

