import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast() {
    let [loaded, setLoaded] = useState();
    let [forecast, setForecast] = useState();

    function handleResponse(response) {
        console.log(response.data);
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
                //let latitude = props.coordinates.lat;
                //let longitude = props.coordinates.lon;
                let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
                
                axios.get(apiUrl).then(handleResponse);

                return null;
            }
        }



  //https://api.shecodes.io/weather/v1/forecast?lat={38.71667}&lon={-9.13333}&key=(bf8f1010b3c486eaa378at4e5eo24f84}&units=metric
