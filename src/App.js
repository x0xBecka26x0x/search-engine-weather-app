import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather defaultCity="New York" />
          <footer>
            This project was coded by {" "}
            <a 
                href="/" 
                target="_blank" rel="noreferrer">
                Rebecca Thombs
                </a> and is open-sourced on {" "}
            <a 
                href="https://github.com/x0xBecka26x0x/search-engine-weather"
                target="_blank" rel="noreferrer"
            >Github</a>{" "} and {" "} 
            hosted on {" "}
            <a
                href="https://app.netlify.com/teams/x0xbecka26x0x-qzlecfy/sites" 
                target="_blank" rel="noreferrer"
                >Netlify</a>! {" "}✌🏼
          </footer>
        </div>
      </div>
    );
}