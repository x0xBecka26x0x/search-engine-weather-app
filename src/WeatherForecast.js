import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect (() => {
        setLoaded(false);
    }, [props.data]);
    function handleResponse(response) {
        console.log(response);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col">
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
                            let city = props.data;
                            console.log(response);
                            let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
                            axios.get(apiUrl).then(handleResponse);
                        }
                    })}
                </div>
            </div>
            );
        }
    }


        //bf8f1010b3c486eaa378at4e5eo24f84


  //{https://api.shecodes.io/weather/v1/forecast?query=Lisbon&key=bf8f1010b3c486eaa378at4e5eo24f84&units=metric}
