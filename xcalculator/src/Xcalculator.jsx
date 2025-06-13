import './calc.css';
import { useState } from 'react';
function XCalculator(){
    const [result,setResult] = useState(0);
    const [input,setInput] = useState("");
    
    function handleClick(e){
        let inputDisplay =document.getElementById("inputDisplay");
        setInput((prev)=> prev+e.target.value)
        inputDisplay.value=input;
    }
    function calculateResult(e){
        if(input){
        let res = eval(input);
       setResult(res);
        let results = document.getElementById("resultTab");
        results.style.display="block";
        }
        else{
            let results = document.getElementById("resultTab");
            setResult("Error");
        results.style.display="block";
        }
    }
    function clearInput(e){
        setInput("");
        let results = document.getElementById("resultTab");
        results.style.display="none";
        setResult(0);
    }

    return(
        <div className='container'>
        <h1>React Calculator</h1>
        <input id='inputDisplay' value={input} type="text"   />
        <div id='resultTab'>
            {result}
        </div>
        <div className='inputPad'>
        <button className='inputButton' value={7} onClick={handleClick}>7</button>
        <button className='inputButton' value={8} onClick={handleClick}>8</button>
        <button className='inputButton' value={9} onClick={handleClick}>9</button>
        <button className='inputButton' value={"+"} onClick={handleClick} >+</button>
        <button className='inputButton' value={4} onClick={handleClick}>4</button>
        <button className='inputButton' value={5} onClick={handleClick}>5</button>
        <button className='inputButton' value={6} onClick={handleClick}>6</button>
        <button className='inputButton'  value={"-"} onClick={handleClick}>-</button>
        <button className='inputButton' value={1} onClick={handleClick}>1</button>
        <button className='inputButton' value={2} onClick={handleClick}>2</button>
        <button className='inputButton' value={3} onClick={handleClick}>3</button>
        <button className='inputButton' value={"*"} onClick={handleClick} >*</button>
        <button className='inputButton' value={"C"} onClick={clearInput} >C</button>
        <button className='inputButton' value={0} onClick={handleClick}>0</button>
        <button className='inputButton' value={"="} onClick={calculateResult} >=</button>
        <button className='inputButton' value={"/"} onClick={handleClick} >/</button></div>
        </div>
    )
}

export default XCalculator;
