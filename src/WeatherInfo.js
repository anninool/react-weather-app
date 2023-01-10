import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4 pt-3">
        <div className="col-4">
          <div className="d-flex mt-2">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul className="atributes">
            <li>Feels like: {Math.round(props.data.feeltemp)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col-4 d-flex flex-row-reverse">
          <div className="weather-card">
            <h1>{props.data.city} </h1>
            <ul className="card-atributes">
              <li className="text-capitalize">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
