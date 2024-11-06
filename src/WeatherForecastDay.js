import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}`;
    }
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div className="WeatherForecast">
            <div className="WeatherForecast-day">{day()}WED</div>
            <div className="WeatherForecast-Icon">
                <img 
                    src={props.data.icon_url}
                    alt={props.data.description} 
                />
            </div>
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                        {maxTemperature()}20°
                    </span> {" "}
                    <span className="WeatherForecast-temperature-min">
                        {minTemperature()}10°
                    </span>
            </div>
        </div>
    );
}