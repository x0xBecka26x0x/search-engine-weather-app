import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }


    return (
        <div className="WeatherForecast">
            <div className="WeatherForecast-day">{day()}Thursday</div>
                    <WeatherIcon code="09d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                        {maxTemperature()}19°
                    </span>
                    <span className="WeatherForecast-temperature-min">
                        {minTemperature()}10°
                    </span>
                </div>
              </div>
    );
}