import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '5f917bf947410baa49fc1c8146c3d4bd'; 

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div style={{ background: `#09607a`, padding: '20px', textAlign: 'center', color: 'white' }}>
      <h1>Weather App</h1>
      <input type="text" placeholder="Enter city" value={city} onChange={handleInputChange} />
      <button style={{ margin: '10px' }} onClick={getWeatherData}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>Pogoda w  {weatherData.name}</h2>
          <p>Temperatura: {Math.round(weatherData.main.temp)} °C</p>
          <p>Opis: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
