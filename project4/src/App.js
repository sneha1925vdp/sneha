// import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';

let bgcolorbg = "orange"
let colortext = "white"
let data = "Project 4 started"

function App() {
  const [bgcolor, setbgcolor] = useState(bgcolorbg);
  const [text, settext] = useState(data);
  const [colors, setcolors] = useState(colortext);

  const changebgcolor=()=>{
    setbgcolor("green");
    settext("Project 4 completed");
    setcolors("red");
  }

  const normaldata=()=>{
    setbgcolor(bgcolorbg);
    settext(data);
    setcolors(colortext);
  }

  return (
    <>
    <div style={{backgroundColor:bgcolor, color:colors}}>
        <h1>{text}</h1>
        <button className='btn btn-dark' onClick={changebgcolor} onDoubleClick={normaldata}>Click me</button>
    </div>
    </>
  );
}

export default App;
