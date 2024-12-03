import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="Weather-Info">
            <h1><strong>{props.data.city}</strong></h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="description">{props.data.description}</li>
                <div className="humidity">
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h%</li>
                </div>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                <div className="icon">
                        <img
                            src={props.data.iconUrl}
                            alt={props.data.description}
                        />
                    </div>
                    <div className="float-right">
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
                </div>
              </div>
        </div>
    );
}



//src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
