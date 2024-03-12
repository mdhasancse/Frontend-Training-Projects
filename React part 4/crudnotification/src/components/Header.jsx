import React, { Component } from "react";
import '../styles/Header.css'
import '@fortawesome/fontawesome-free/css/all.css';

class Header extends Component {
    render() {
        return (
            <div className="topnav">
                <div className="search-container">
                    <form action="">
                        <input type="text" placeholder="Search.." name="search" />
                        <button><a><i className="fa-solid fa-user" style={{ color: 'white' }}></i></a></button>
                        {/* <button><a><i className="fa-solid fa-bell" style={{ color: 'white' }}></i></a></button>  // This icon will store all notifications in an array list  */}
                        <button type="submit"><i className="fa fa-search" style={{ color: 'white' }}></i></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;
