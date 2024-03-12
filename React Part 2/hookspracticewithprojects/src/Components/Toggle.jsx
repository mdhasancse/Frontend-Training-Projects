import React from 'react'
import { useState } from 'react';


const Toggle = () => {
    const [myMsg, setMyMsg] = useState("hi this is blahh");

    const changeMsg = () => {
        if (myMsg === "hi this is blahh") {
          setMyMsg("sorry bro condition not meet");
        }
        if (myMsg === "sorry bro condition not meet") {
          setMyMsg("hi this is blahh");
        }
      };
    
      return (
        <div className="appli">
          <h1>{myMsg}</h1>
          <button onClick={changeMsg}>Click me</button>
        </div>
      );
};
export default Toggle