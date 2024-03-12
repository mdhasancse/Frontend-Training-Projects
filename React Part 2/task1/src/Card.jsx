import React from "react";
// import contacts from "./contacts";

function Card(Props) {
    return (
        <div className="Card">
       
            <div className="top">
            <p><b>{Props.id}</b></p>
                <h2 className="name">{Props.name}</h2>
                <img className="circle-img" src={Props.img} alt="image" />

            </div>
            <div className="bottom">
                <p className="infp">{Props.tel}</p>
                <p className="infp">{Props.email}</p>
            </div>
        </div>
    )
}

export default Card;