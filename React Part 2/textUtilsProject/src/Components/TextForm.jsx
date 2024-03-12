import React, {useState} from 'react'

export function TextForm(props) {
    const [text, setText] = useState("");
    
  
   

    const handleUpercase = () => {
        // console.log("upper case button clicked")
        // setText("ooh I am clicked......")
        let upeText = text.toUpperCase();
        setText(upeText);
        props.showAler("converted to upper case", "success");
    }
    const handleLowercase=()=>{
        let lowerText = text.toLocaleLowerCase()
        setText(lowerText)
        props.showAler("converted to lower case", "success");
    }
    const handleCleartext=()=>{
        let newText = '';
        setText(newText);
    }

    const continueToWriteInBox = (event) => {
        // console.log("you can continue write more charaters inside box")
        setText(event.target.value)
    }

    const handleCopytext =()=>{
        let copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAler("Text copied", "success");
    }

    const handleExtraspace = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAler("Removed extra spaces", "success");
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>{props.heading}</h2>
                <div className=" mb-3 ">
                    <textarea className="form-control" onChange={continueToWriteInBox} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} value={text}  id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 btn1" onClick={handleUpercase}> Conver to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2 btn2" onClick={handleLowercase}> Conver to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2 " onClick={handleCleartext}> Clear txts</button>
                <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2 " onClick={handleCopytext}> Copy txts</button>
                <button disabled={text.length===0} className="btn btn-primary  mx-2 my-2 btn2 " onClick={handleExtraspace}> Remove Extra spaces</button>
               
            </div>
            <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and  {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes require for read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
            </div>
        </>
    )
}

