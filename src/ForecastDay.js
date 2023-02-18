import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let dayNumber = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayNumber];
  }

  return (
    <div>
      <div className="mb-1">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="forecast-day-temp">
        <span className="me-1 temp-max">
          {Math.round(props.data.temp.max)}º
        </span>
        <span className="temp-min">{Math.round(props.data.temp.min)}º</span>
      </div>
    </div>
  );
}
