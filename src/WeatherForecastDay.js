import React from "react";
//import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Weather from "./Weather";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }


    return (
        <div className="WeatherForecast">
            <div className="WeatherForecast-day">{day()}Thursday</div>
            <Weather img src={props.data.condition} size={36} alt="weather-icon" />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                        {maxTemperature()}
                    </span>
                    <span className="WeatherForecast-temperature-min">
                        {minTemperature()}
                    </span>
                </div>
            </div>
    );
}