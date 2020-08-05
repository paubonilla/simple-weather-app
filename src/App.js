import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Inner = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const SearchBox = styled.div`
  width: 100%;
  margin: 0 0 75px;
  .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    appearance: none;
    background: none;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
    color: #333436;
    font-size: 20px;
    transition: 0.4s ease;

    &:focus {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`

export const LocationBox = styled.div`
  display: flex;
`

export const Location = styled.div`
  color: #e8e8e8;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`

export const DateStyle = styled.div`
  color: #e8e8e8;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
`

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
  }
`

const api = {
  key: "bed571fdc012c392cd875b56d2aa18ad",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [wQuery, setWQuery] = useState('')
  const [weather, setWeather] = useState({})

  const searchWeather = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${wQuery}&units=metric&APPID=${api.key}`)
        .then(response => response.json()) // get the json from response // json promise // which is gonna pass it into a another promise that is === result
        .then(result => {
          setWeather(result) // and set Weather === result
          setWQuery('')
          console.log(weather)
        })
    }
  }

  const _date = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <Container>
      <Inner>
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
          <main>
            <SearchBox>
              <input
                type="text"
                className="search-bar"
                placeholder="Search location"
                onChange={e => setWQuery(e.target.value)}
                value={wQuery}
                onKeyPress={searchWeather}
              />
            </SearchBox>
            {(typeof weather.main != "undefined") ? (
              <>
                <div className="location-box">
                  <Location>{weather.name}, {weather.sys.country}</Location>
                  <DateStyle>{_date(new Date())}</DateStyle>
                </div>
                <WeatherContainer>
                  <div className="temp">
                    {Math.round(weather.main.temp)}°C
                </div>
                  <div className="weather">{weather.weather[0].main}</div>
                  <div className="weatherDesc">{weather.weather[0].description}</div>
                </WeatherContainer>
              </>
            ) : ('')}
          </main>
        </div>
      </Inner>
    </Container>
  );
}

export default App;
