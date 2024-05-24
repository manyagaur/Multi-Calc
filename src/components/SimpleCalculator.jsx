import React from "react";
import { useState } from "react";

function SimpleCalculator(){


    const [input,setInput]=useState([])

    function handleInput(){

    }

    function handleNumber(e){
        setInput(e.target.value)

    }
        return(
            <>
            <input className="simple-calc-input" type="text" value={input} onChange={handleInput} readOnly></input>
            <div className="simple-calc-buttons">
            <button onClick={handleNumber}>0</button>
            <button onClick={handleNumber}>C</button>
            <button onClick={handleNumber}>^</button>
            <button className="equal-button">=</button>
            </div>
            <div className="simple-calc-buttons">
            <button onClick={handleNumber}>7</button>
            <button onClick={handleNumber}>8</button>
            <button onClick={handleNumber}>9</button>
            <button onClick={handleNumber}>*</button>
            </div>
            <div className="simple-calc-buttons">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            </div>
            <div className="simple-calc-buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            </div>
            </>
        )
}

export default SimpleCalculator