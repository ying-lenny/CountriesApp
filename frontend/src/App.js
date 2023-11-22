import React, { useState } from 'react';
import './App.css';
import { getSearchResults } from './api/backend';

function App() {

  const [searchInput, setSearchInput] = useState("");

  //frontend external api call, works fine
  const loadCountryAPI = (name) =>{
    // fetch url of rest country from website
    getSearchResults(name)
    .then(data => displayCountries(data))
}

  // displaying all countries
  const displayCountries = countries =>{
    console.log(countries.status)
    if (countries.status === 404) {
      alert("Nothing found")
      return
    } else {
      // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    // displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
    }
    
  }

  // get data and set it to html
  const getCountry = (country) =>{
    return `
        <div className="country-div">
        <img src="${country.flags.png}">
        <h2>${country.name.common}</h2>
        <hr>
        <h4>Population: ${country.population}</h4>
        <h4>Regoin: ${country.region}</h4>
        <h4>Capital: ${country.capital}</h4>
        </div>
    `
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (searchInput.length >= 3) {
    loadCountryAPI(searchInput)
    } else {
      alert("Value too small")
    }
  };

  return (
    <div className="App">
      <form class="form">
          <input id="search" type="text" class="input" placeholder="search..."
            onChange={handleChange}
            value={searchInput}/>
          <button onClick={handleButton} id="result" class="clear-results">search</button>
      </form>
      <div className="countries" id="countries"></div>
    </div>
  );
}

export default App;
