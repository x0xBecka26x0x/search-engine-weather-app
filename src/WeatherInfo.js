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
            <div className="row mt-5">
                <div className="col-6">
                    <img className="icon"
                        src={props.data.icon_Url}
                        alt={props.data.description}
                        //src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                     />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
            </div>
        </div>
    );
}
