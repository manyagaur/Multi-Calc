import React from "react";
import { useState } from "react";

function SimpleCalculator(){

    const [input,setInput] = useState("")
    const [opr, setOpr] = useState("")
    const [result, setResult] = useState(null)


    function handleNumber(e){
        setInput(input=>input+String(e.target.value))
        console.log(input)

    }

    function handleOperator(e){
        const currOpr=e.target.value
        let currentValue=input
        setInput("")
        setOpr(e.target.value)
        
        let newResult=parseInt(result)
        console.log(currentValue,currOpr,result)

        if (result===null){
            setResult(currentValue)
            console.log(currentValue,currOpr,result)
        }
        else{
            console.log(currOpr)
        switch(opr){
            case "+":
                setResult(prevResult=>parseInt(prevResult)+parseInt(currentValue))
                console.log(parseInt(result)+parseInt(currentValue))
                break

            case "*":
                setResult(prevResult=>parseInt(prevResult)*parseInt(currentValue))
                break

            case "-":
                setResult(prevResult=>parseInt(prevResult)-parseInt(currentValue))
                break

            case "/":
                setResult(prevResult=>parseInt(prevResult)/parseInt(currentValue))
                break
        }
    }  
    }

    function handleC(e){
        setInput("")
        setOpr("")
        setResult("")
    }

    function handleEquals(e){
        if(input.trim()!=="" && opr.trim()!==""){
            switch(opr){
                case "+":
                    var finalResult = parseInt(result)+parseInt(input)
                    break

                case "*":
                    var finalResult = parseInt(result)*parseInt(input)
                    break
                    
                case "-":
                    var finalResult = parseInt(result)-parseInt(input)
                    break

                case "/":
                    var finalResult = parseInt(result)/parseInt(input)
                    break

                default:
                    var finalResult=result
                    break
            }
                setInput(String(finalResult))
                setOpr("")
                setResult(null)

        }
    }
    
        return(
            <>
            <input className="simple-calc-input" 
                type="text"  
                value={input.trim() !== "" ? input : (opr ? opr : "")}
                readOnly
            >
            </input>
            <div className="simple-calc-buttons">
            <button value="0" onClick={handleNumber}>0</button>
            <button value="C" onClick={handleC}>C</button>
            <button value="/" onClick={handleOperator}>/</button>
            <button value="=" onClick={handleEquals} className="equal-button">=</button>
            </div>
            <div className="simple-calc-buttons">
            <button value="7" onClick={handleNumber}>7</button>
            <button value="8" onClick={handleNumber}>8</button>
            <button value="9" onClick={handleNumber}>9</button>
            <button value="*" onClick={handleOperator}>*</button>
            </div>
            <div className="simple-calc-buttons">
            <button value="4" onClick={handleNumber}>4</button>
            <button value="5" onClick={handleNumber}>5</button>
            <button value="6" onClick={handleNumber}>6</button>
            <button value="-" onClick={handleOperator}>-</button>
            </div>
            <div className="simple-calc-buttons">
            <button value="1" onClick={handleNumber}>1</button>
            <button value="2" onClick={handleNumber}>2</button>
            <button value="3" onClick={handleNumber}>3</button>
            <button value="+" onClick={handleOperator}>+</button>
            </div>
            </>
        )
}

export default SimpleCalculator