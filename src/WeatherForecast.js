import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

//export default function WeatherForecast(props) {
  //  let [loaded, setLoaded] = useState(false);
 //   let [forecast, setForecast] = useState(null);

//    function handleResponse(response) {
 //       setForecast(response.data.daily);
  //      setLoaded(true);
//    }

 //   if (loaded) {
 //       return (
 //           <div className="WeatherForecast">
  //              <div className="row">
 //                   <div className="col">
 //                       <WeatherForecastDay data={forecast[0]} />
  //                  </div>
 //               </div>
 //           </div>
 //       );
 //   } else {
        //let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
        //let longitude = props.coordinates.lon;
        //let latitude = props.coordinates.lat;
//        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

//        axios.get(apiUrl).then(handleResponse);

  //      return null;
//    }
//}