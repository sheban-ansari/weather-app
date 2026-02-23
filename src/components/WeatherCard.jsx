import React from "react";

function WeatherCard({ data }) {
  if (!data) return null;

  const weatherMain = data.weather[0].main;
  const iconCode = data.weather[0].icon;
  const isNight = iconCode.includes("n");

  const getWeatherEmoji = () => {
    if (weatherMain === "Clear") {
      return isNight ? "🌙" : "☀️";
    }
    if (weatherMain === "Clouds") {
      return isNight ? "☁️🌙" : "☁️";
    }
    if (weatherMain === "Rain") return "🌧️";
    if (weatherMain === "Drizzle") return "🌦️";
    if (weatherMain === "Thunderstorm") return "⛈️";
    if (weatherMain === "Snow") return "❄️";
    if (weatherMain === "Mist" || weatherMain === "Fog") return "🌫️";

    return "🌍";
  };

  return (
    <div className="weather-card">
      <h2 className="city">{data.name}</h2>

      <div className="weather-emoji">{getWeatherEmoji()}</div>

      
      <div className="temp">
        {Math.round(data.main.temp)}°C
      </div>

      <div className="weather-type">{weatherMain}</div>

      <div className="weather-details">
        <div className="detail">
          <span>Humidity</span>
          <p>{data.main.humidity}%</p>
        </div>

        <div className="detail">
          <span>Wind Speed</span>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;