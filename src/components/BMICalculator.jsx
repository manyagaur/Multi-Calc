import React, { useRef } from "react";
import { useState } from "react";

function BMICalculator() {

    const [weight,setWeight]=useState("")
    const [height,setHeight]=useState("")
    const [result,setResult]=useState("")
    const [category, setCategory] = useState("");
    const sliderRef = useRef(null);

    function handleWeight(e){
        setWeight(e.target.value)
    }

    function handleHeight(e){
        setHeight(e.target.value)
    }
 

  const calcBmi = () => {
    const slider = sliderRef.current;
    var bmi=((weight*10000)/(height*height)).toFixed(2)
    console.log(bmi)
    setResult(bmi)
    setCategory(getBmiCategory(bmi))

    console.log(((weight*10000)/(height*height)))
    if (slider) {
      slider.value = bmi;
    
      
      const event = new Event('input', { bubbles: true });
      slider.dispatchEvent(event);
    }
  }

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Healthy Weight";
    if (bmi >= 25.0 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30.0) return "Obese";
  };

  return (
    <>
      <div>
        <label>Age: </label><br />
        <input type="text" /><br /><br />
        <label>Gender: </label><br />
        Male<input type="radio" name="gender" />
        Female<input type="radio" name="gender" /><br /><br />
        <label>Height: </label><br />
        <input type="number" placeholder="(in cm)" value={height} onChange={handleHeight}/><br /><br />
        <label>Weight: </label><br />
        <input type="number" placeholder="(in kg)"  value={weight} onChange={handleWeight}/>
      </div><br />
      <button 
          className="move-slider-btn" 
          onClick={calcBmi}
        >
          Calculate BMI
        </button><br></br>
        <div className="bmi-chart">
        <br /><br />
        <input 
          id="colorSlider" 
          type="range" 
          defaultValue="50" 
          min="0" 
          max="50" 
     
          ref={sliderRef} />
          <br></br><br></br>
        <h3>{result}</h3>
        <h3>{category}</h3>
        
      </div>
    </>
  );
}

export default BMICalculator;
