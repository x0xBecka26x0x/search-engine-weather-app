import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    console.log();
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    //props.data.daily.temperature.maximum
    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
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
                <div className="WeatherForecast-day">{day()}</div>
                <div className="WeatherIcon" code={props.data.condition.icon_Url} />
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