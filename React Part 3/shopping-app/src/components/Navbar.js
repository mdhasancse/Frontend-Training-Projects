import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ size }) => {
    return (
        <nav>
            <div className="nav_box">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">My shoping list</a></li>
                </ul>

                <div className="cart">
                    <span>
                        <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                    <div className="dropdown">
                    <button className="dropbtn profile-btn">
                        <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg" alt="User Profile" />
                    </button>
                        <div className="dropdown-content">
                            <a href="#">Profile</a>
                            <a href="#">Settings</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar