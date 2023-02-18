import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="current-place">
      <div className="City">
        <h1>{props.data.city}</h1>
      </div>
      <FormattedDate date={props.data.date} />
      <div className="text-capitalize">{props.data.description}</div>
      <div className="weather">
        <div className="row">
          <div className="col-6">
            <div>
              <WeatherIcon code={props.data.icon} size={65} />
              <Temperature cels={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <strong>{props.data.humidity} </strong>%
              </li>
              <li>
                Wind: <strong>{props.data.wind} </strong>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
