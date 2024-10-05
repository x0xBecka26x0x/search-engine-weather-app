import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
    const [weatherDetails, setWeatherDetails] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherDetails({
            ready: true,
            city: response.data.city,
            latitude: response.data.coordinates.latitude,
            longitude: response.data.coordinates.longitude,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            icon_Url: response.data.condition.description.icon_url,
            icon: response.data.condition.description.icon,
            wind: response.data.wind.speed,
        });
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        searchButton();
    }

    function handleSearchBox(event){
        setCity(event.target.value);
    }

    function searchButton() {
        const apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherDetails.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} className="Weather">
                    <div className="row">
                        <div className="col-6">
                            <input
                                type="search"
                                placeholder="Enter a city..."
                                className="control"
                                onChange={handleSearchBox}
                            />
                            <input
                                type="submit" 
                                value="Search" 
                                className="btn"
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherDetails} />
                <WeatherForecastDay data={weatherDetails} />
            </div>
    );
} else {
    searchButton();
    return "Loading...";
}
}