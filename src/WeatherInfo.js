import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="Weather-Info">
            <h1><strong>{props.data.city}</strong></h1>
        <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li> 
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                   <WeatherIcon code={props.data.icon} size={52} />
              </div>
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
        </div>
            <div className="col-6">
                <span className="condition">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h%</li>
                    </ul>
                </span>
            </div>
        </div>
    );
}