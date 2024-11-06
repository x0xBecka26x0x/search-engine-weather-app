import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature);
        return `${temperature}`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temperature);
        return `${temperature}`;
    }
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = 
        ["Sunday", 
         "Monday", 
         "Tuesday", 
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"];
         
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
                        Max: {maxTemperature()}20°
                    </span> {" "}
                    <span className="WeatherForecast-temperature-min">
                        Min: {minTemperature()}10°
                    </span>
            </div>
        </div>
    );
}