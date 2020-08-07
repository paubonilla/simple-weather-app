import React from 'react'
import styled from 'styled-components'

export const SearchBoxContainer = styled.div`
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
    &::placeholder {
      color: #404040;
    }
    &:focus {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`

const SearchBox = ({ wQuery, setWQuery, searchWeather }) => {
  return (
    <div>
      <SearchBoxContainer>
        <input
          type="text"
          className="search-bar"
          placeholder="Search location"
          onChange={e => setWQuery(e.target.value)}
          value={wQuery}
          onKeyPress={searchWeather}
        />
      </SearchBoxContainer>
    </div>
  )
}
export default SearchBox