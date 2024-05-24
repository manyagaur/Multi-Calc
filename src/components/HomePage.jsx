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