import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100"
            />
          </div>
        </div>
      </form>
      <div className="row mt-3">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly cloudy"
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-3">
          <ul className="atributes">
            <li>Precipitation: 15%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>

        <div className="col-6 d-flex flex-row-reverse">
          <div className="weather-card">
            <h1>New York </h1>
            <ul className="card-atributes">
              <li>Wednesday 7:00</li>
              <li>Mostly cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
