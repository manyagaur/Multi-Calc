import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage(){

    const navigate = useNavigate();

    const handleSimpleCButton = () => {
      navigate("/simple-calculator");
    };

    const handleBmiCButton = () => {
        navigate("/bmi-calculator");
      };

      const handleSipCButton = () => {
        navigate("/sip-calculator");
      };

      const handleInterestCButton = () => {
        navigate("/interest-calculator");
      };

    return(
        <>
        <h2>Calc It!</h2>
        <h4>Complex calculations made easy...</h4><br></br><br></br>
        <div className="container">
        <button className="box" onClick={handleSimpleCButton}>Simple Calculator</button>
        <button className="box" onClick={handleBmiCButton}>BMI Calculator</button>
        <button className="box" onClick={handleSipCButton}>SIP Calculator</button>
        <button className="box" onClick={handleInterestCButton}>Interest Calculator</button>
        </div>
        </>
    )
}
export default HomePage