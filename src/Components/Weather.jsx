import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [weather,setweather]=useState('');
  const[temp,settemp]=useState('');
  const[desc,setdesc]=useState('')

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather() {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b07549cfea8ec9bb093913680e7e14e3`);
    
    weatherData.then(function (success) 
    {
      console.log(success.data);
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemp(success.data.main.temp)
    });
  }

  return (
    <div className="bg-black p-20">
      <div className="bg-blue-300 p-10 rounded md">
        <h1 className="text-2xl font-medium">Weather report</h1>
        <p>I can give you a weather report about your city!</p>
        <input onChange={handleCity}
          type="text"
          className="mt-2 border border-black rounded-md"
          value={city}
          
          
        />
        <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2">
          Get Report
        </button>
        <div className="mt-2">
          <h1>
            <b>Weather :  {weather}</b>
          </h1>
          <p>
            <b>Temperature :  {temp}</b>
          </p>
          <p>
            <b>Description :   {desc}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
