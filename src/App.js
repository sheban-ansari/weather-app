import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isNight, setIsNight] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setError("");
      setWeather(null);

      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found or API issue ❌");
        return;
      }

      setWeather(data);

      const iconCode = data.weather[0].icon; 
      if (iconCode.includes("n")) {
        setIsNight(true);
      } else {
        setIsNight(false);
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className={`app ${isNight ? "night" : "day"}`}>
      <div className="container">
        <h1 className="title">🌦️ Weather App</h1>

        <SearchBox onSearch={fetchWeather} />

        {error && <p className="error">{error}</p>}

        {weather && weather.main && (
          <WeatherCard data={weather} />
        )}
      </div>
    </div>
  );
}

export default App;