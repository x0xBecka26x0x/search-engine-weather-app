import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast() {
    let [loaded, setLoaded] = useState();
    let [forecast, setForecast] = useState();

    function handleResponse(response) {
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded();
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
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
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        //let latitude = props.data.coordinates.lat;
        //let longitude = props.data.coordinates.lon;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
  }

  //https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=bf8f1010b3c486eaa378at4e5eo24f84&units=metric
