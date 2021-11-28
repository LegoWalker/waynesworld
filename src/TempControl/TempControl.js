import React, { useState } from 'react';
import './Temp.css';

const TempControl = () => {
  const [temperature, setTemperature] = useState(12);
  const [tempColor, setTempColor] = useState("cold");

  const increaseTemperature = () => {
    //const newTemperature = (temperature == 25) ? temperature : temperature + 1;
    if (temperature == 25) return;
    const newTemperature = temperature + 1;      

    if (newTemperature >= 15) {
      setTempColor('hot')
    } 
    else if (newTemperature <= 10) {
      setTempColor('cold')
    }
    else setTempColor('')

    setTemperature(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperature == -5) return;
    const newTemperature = temperature - 1;

    if (newTemperature <= 10) {
      setTempColor('cold')
    } 
    else if (newTemperature >= 15) {
      setTempColor('hot')
    } 
    else setTempColor('')

    setTemperature(newTemperature);
  };

  return(
    <div className="body-container">
      <div className="app-container">
          <div className="temperature-display-container">
              <div className={`temperature-display ${tempColor}`}>{temperature}°C</div>
          </div>
          <div className='button-container'>
            <button onClick={() => increaseTemperature()} className='round-button'>+</button>
            <button onClick={() => decreaseTemperature()} className='round-button'>-</button>
          </div>          
      </div>
    </div>
  );
}

export default TempControl;
