import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.maximum);
        return `${temperature}°`;
    }

    //props.data.daily.temperature.maximum
    function minTemperature() {
        let temperature = Math.round(props.data.minimum);
        return `${temperature}°`;
    }

    //props.data.daily.temperature.minimum
    
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
         
        return days[day];
    }

    return (
        <div className="WeatherForecast">
            <div className="WeatherForecast-day">{day()}DAY</div>
            <div className="WeatherIcon">
                <img className="icon"
                    src={props.data.icon_Url}
                    alt={props.data.description} 
                    //src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
                />
            </div>
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