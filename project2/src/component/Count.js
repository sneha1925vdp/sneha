import React, { useState } from "react";

function Count() {

    // functions will call multiple time
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }

    // with using objects
    // const [name,useName] = useState('Increment');
    const [state,setState] = useState({cont:0, name:'Increment'});

    const cont = state.cont
    const name = state.name

    function add(){
        setState(prevState=>{
            return{...prevState,name:'increment',cont: prevState.cont+1}
        })
    }

    function subtract(){
        setState(prevState=>{
            return{...prevState,name:'decrement',cont: prevState.cont-1}
        })        
    }


    return(
        <div>
            <div>
            <button onClick={increment}>Increment</button>  {count} <button onClick={decrement}>Decrement</button>
            <br/>
            <h1>Using Objects</h1>
            {name}
            <div>
            <button onClick={add}>Add</button>   {cont}   <button onClick={subtract}>Subtract</button>
            
            </div>
            </div>
        </div>
    );
    
}

export default Count;