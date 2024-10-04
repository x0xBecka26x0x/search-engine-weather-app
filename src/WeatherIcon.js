import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d":  "CLEAR_DAY",
        "01n":  "CLEAR_DAY",
        "02d":  "PARTLY_CLOUDY_DAY",
        "02n":  "PARTLY_CLOUDY_DAY",
        "03d":  "PARTLY_CLOUDY_DAY",
        "03n":  "PARTLY_CLOUDY_NIGHT",
        "04d":  "CLOUDY",
        "04n":  "CLOUDY",
        "09d":  "RAIN", 
        "09n":  "RAIN",
        "10d":  "RAIN", 
        "10n":  "RAIN",
        "11d":  "RAIN", 
        "11n":  "RAIN",
        "13d":  "SNOW", 
        "13n":  "SNOW", 
        "50d":  "FOG",
        "50n":  "FOG"
    }

    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="#1e1e1e"
            size={props.size}
            animate={true}
        />
    );
}

// default function WeatherIcon(props) {
  //  const codeMapping = {
    //    "01d":"Clear-sky",
    //  "01n":"Clear-sky-night",
    //    "02d":"Few-clouds",
   //     "02n":"Few-clouds-night",
  //      "03d":"Scattered-clouds",
  //      "03n":"Scattered-clouds-night", 
  //      "04d":"Broken-clouds",
  //      "04n":"Broken-clouds-night",
  //      "05d":"Shower-rain",
   //    "05n":"Shower-rain-night",
        //    "06d":"Rain",
  //      "06n":"Rain-night",
  //      "07d":"Thunderstorm",
  //      "07n":"Thunderstorm-night",
 //       "08d":"Snow",
 //       "08n":"Snow-night",
  //      "09d":"Mist",
  //      "09n":"Mist-night",
//    };
   
 //   return (
 //       WeatherIcon = codeMapping()
        //<div>"Loading..."</div>
       
 //   );
//} 







//"Clear-sky":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
//"Clear-sky-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
//"Few-clouds":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
//"Few-clouds-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png",
//"Scattered-clouds":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
//"Scattered-clouds-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png", 
//"Broken-clouds":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
//"Broken-clouds-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
//"Shower-rain":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png",
//"Shower-rain-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-night.png",
//"Rain":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
//"Rain-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
//"Thunderstorm":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png",
//"Thunderstorm-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-night.png",
//"Snow":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png",
//"Snow-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png",
//"Mist":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
//"Mist-night":"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png",