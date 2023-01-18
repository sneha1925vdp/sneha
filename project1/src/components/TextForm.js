import React, { useState } from 'react'


export default function TextForm(props) {  
    const handleUpClick = ()=>{
        console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
        
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
            </div>
            <div className="container my-2">
                <h1>Your text summery</h1>
                {/* we add here no of words and no of charecters */}
                <p>{text.split(" ").length} number of words and {text.length} number of charecters !!!</p>
            </div>
        </>
    )
}
