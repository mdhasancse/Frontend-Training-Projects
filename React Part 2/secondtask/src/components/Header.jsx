
import React from "react";
import { useState } from "react";
import './Header.css'
import '@fortawesome/fontawesome-free/css/all.css'; // this might be throw eoor, run below cmnd
                                                    // npm install @fortawesome/fontawesome-free




const Header = ()=> {
    return (
        <div className="topnav">
        <div className="search-container">
            <form action="">
                <input type="text" placeholder="Search.." name="search" />
                <button><a><i class="fa-solid fa-user" style={{ color: 'white' }}></i></a></button>
                {/* <button><a><i class="fa-solid fa-bell" style={{ color: 'white' }}></i></a></button>  // This icone will store all notifications in array list  */}
                <button type="submit"><i className="fa fa-search" style={{ color: 'white' }}></i></button>
                
            </form>
           
        </div>
    </div>
    );
}
export default Header;