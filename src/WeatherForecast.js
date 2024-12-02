import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState([]);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  }


  if (loaded) {
    console.log(forecast);
    if (forecast && Array.isArray(forecast)) {
      return (
          <div className="WeatherForecast">
              <div className="row">
                  {forecast.map(function (dailyForecast, index) {
                      if (index < 6) {
                          return (
                              <div className="col" key={index}>
                                  <WeatherForecastDay data={dailyForecast} />
                              </div>
                          );
                      } else {
                          return null;
                      }
                  })}
              </div>
          </div>
      );
  } else {
      load();
      return null;
  }
  }
}