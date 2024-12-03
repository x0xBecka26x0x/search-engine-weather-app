import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
  "Clear sky": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  "Clear sky": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
  "Few clouds": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
  "Few clouds": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png",
  "Scattered clouds": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
  "Scattered clouds": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
  "Broken clouds": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
  "Broken clouds": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
  "Shower rain": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png",
  "Shower rain": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-night.png",
  "Rain": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
  "Rain": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
  "Thunderstorm": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png",
  "Thunderstorm": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-night.png",
  "Snow": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png",
  "Snow": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png",
  "Mist": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
  "Mist": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png",
};

return (
  <div>
    icon={codeMapping[props.code]}
  </div>
)
}