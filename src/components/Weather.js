import React from 'react'
import styled from 'styled-components'

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  > .temp {
    display: flex;
    background-color: rgba(255,255,255,0.2);
    border-radius: 16px;
    padding: 15px 25px;
    color: #e8e8e8;
    font-size: 90px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(50,50,70,0.5);
    box-shadow: 3px 6px rgba(0,0,0,0.2);
  }

  > .weather {
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 55px;
    padding: 40px;
    color: #e8e8e8;
  }

  > .weatherDesc {
    color: #e8e8e8;
    font-family: 'Noto Serif JP', serif;
    font-size: 14px;
  }
`

const Weather = ({ weather }) => {
  return (
    <WeatherContainer>
      <div className="temp">
        {Math.round(weather.main.temp)}°C
        </div>
      <div className="weather">{weather.weather[0].main}</div>
      <div className="weatherDesc">{weather.weather[0].description}</div>
    </WeatherContainer>
  )
}

export default Weather