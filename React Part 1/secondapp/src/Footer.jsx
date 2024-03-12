import React from "react";
import './App.css';

let year = new Date().getFullYear()
function Footer(){

    return <div className="footer"> <p>Copyright ⓒ {year}</p></div>
}
export default Footer