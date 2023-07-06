import React from "react";

export default function Forecast() {
  return (
    <div className="container text-center">
      <div className="row row-cols-4">
        <div className="col">
          High: <span id="high-temp">8</span>°C
        </div>
        <div className="col">
          Low: <span id="low-temp">3</span>°C
        </div>
        <div className="col">
          Wind: <span id="wind">10</span> km/h
        </div>
        <div className="col">
          Humidity: <span id="humidity">78</span>%
        </div>
      </div>
      <hr />
      <div className="next-five-days">Next 5 Days</div>
      <br />
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-4">
            <div className="weather-forecast-day">Thu</div>
            <img
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
              width="42"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temp-max">10°</span>
              <span className="weather-forecast-temp-min">6°</span>
            </div>
            <div className="weather-forecast-day">Thu</div>
            <img
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
              width="42"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temp-max">10°</span>
              <span className="weather-forecast-temp-min">6°</span>
              <div className="weather-forecast-day">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt=""
                width="42"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temp-max">10°</span>
                <span className="weather-forecast-temp-min">6°</span>
              </div>
              <div className="weather-forecast-day">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt=""
                width="42"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temp-max">10°</span>
                <span className="weather-forecast-temp-min">6°</span>
              </div>
              <div className="weather-forecast-day">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt=""
                width="42"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temp-max">10°</span>
                <span className="weather-forecast-temp-min">6°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
