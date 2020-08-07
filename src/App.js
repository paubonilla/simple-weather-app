import React, { useState } from 'react'
import SearchBox from './components/Search'
import Weather from './components/Weather'
import './App.css';
import { Container, Inner, Content, LocationBox, Location, DateStyle } from './styled'

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
          <Content>
            <SearchBox
              setWQuery={setWQuery}
              searchWeather={searchWeather}
            />
            {(typeof weather.main != "undefined") ? (
              <>
                <LocationBox>
                  <Location>{weather.name}, {weather.sys.country}</Location>
                  <DateStyle>{_date(new Date())}</DateStyle>
                </LocationBox>
                <Weather
                  weather={weather}
                />
              </>
            ) : ('')}
          </Content>
        </div>
      </Inner>
    </Container>
  );
}

export default App;
