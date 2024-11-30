import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay data={forecast} />
            </div>
        </div>
    </div>
    );
} else {
    let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

   


        //console.log(response);
        //bf8f1010b3c486eaa378at4e5eo24f84
        //https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=bf8f1010b3c486eaa378at4e5eo24f84&units=metric//
