import React from "react";

function BMICalculator(){
    return(
        <>
        <div>
        <label>Age: </label><br></br>
        <input type="text"></input><br></br><br></br>
        <label>Gender: </label><br></br>
        Male<input type="radio"></input>
        Female<input type="radio"></input><br></br><br></br>
        <label>Height: </label><br></br>
        <input type="number" placeholder="(in cm)"></input><br></br><br></br>
        <label>Weight: </label><br></br>
        <input type="number" placeholder="(in kg)"></input>
        </div><br></br>
        <div className="bmi-chart">
            <div className="bmi-indicator">
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="orange"></div>
            <div className="red"></div>
            </div>
        </div>
        <input type="range" className="slider-class" min="0" max="18" value="50"></input>
        </>
    )
}

export default BMICalculator