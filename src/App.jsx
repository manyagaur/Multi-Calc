import './App.css'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage'
import SimpleCalculator from './components/SimpleCalculator';
import BMICalculator from './components/BMICalculator';
import SIPCalculator from './components/SIPCalculator';
import InterestCalculator from './components/InterestCalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/sip-calculator" element={<SIPCalculator />} />
        <Route path="/interest-calculator" element={<InterestCalculator />} />
      </Routes>
    </Router>
  );
}
export default App
