import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maximumTemperature() {
        let temperature = Math.round(props.data.temperature.maxinmum);
        return `${temperature}°`;
    }

    function minimumTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }


return (
    <div className="WeatherForecast">
            <div className="WeatherForecast-day">{day()}</div>
                    <WeatherIcon code="03d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                        {maximumTemperature()}°
                    </span>
                    <span className="WeatherForecast-temperature-min">
                        {minimumTemperature()}°
                    </span>
                </div>
              </div>
    );
}