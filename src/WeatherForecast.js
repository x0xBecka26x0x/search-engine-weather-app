import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function load() {
    console.log();
    let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  }


  if (loaded) {
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