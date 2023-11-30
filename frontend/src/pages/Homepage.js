import React, { useState } from 'react';
import { getSearchResults } from '../api/backend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import Disclaimer from '../Components/Disclaimer';

function Homepage() {

  const [searchInput, setSearchInput] = useState("");
  // selecting loading div
  const loader = document.querySelector("#loading");

  //frontend external api call, works fine
  const loadCountryAPI = (name) =>{
    // fetch url of rest country from website
    getSearchResults(name)
    .then(data => {
      hideLoading()
      displayCountries(data)})
}

  // displaying all countries
  const displayCountries = countries =>{
    if (countries.status === 404) {
      alert("Nothing found")
      return
    } else {
    const countriesHTML = countries.map(country => getCountry(country));
    // displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
    }
  }

  // get data and set it to html
  const getCountry = (country) =>{
    const currencyArray = Object.values(country.currencies)
    const languageArray = Object.values(country.languages)
    
    return `
        <div className="country-div">
          <img src="${country.flags.png}">
          <div class="country-div-details">
            <h1>${country.name.common}</h1>
            <h3>Population: ${(country.population).toLocaleString()}</h3>
            <h3>Region: ${country.region}</h3>
            <h3>Capital: ${country.capital}</h3>
            <h3>Main Language: ${languageArray[0]}</h3>
            <h3>Currency: ${currencyArray[0].symbol} | ${currencyArray[0].name}</h3>
          </div>
          
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
    displayLoading()
    loadCountryAPI(searchInput)
    } else {
      alert("Value too small")
    }
  };

  function handleClick() {
    window.location.reload();
  }

  function displayLoading() {
    loader.classList.add("display");
  }

  // hiding loading 
  function hideLoading() {
    loader.classList.remove("display");
  }

  return (
    <div className="App">
      <Disclaimer/>
      <form className="form" onSubmit={handleButton}>
        <FontAwesomeIcon icon={faHouse} size="2xl" onClick={handleClick} className='icon'/>
        <input id="search" type="text" className="input" placeholder="Enter a country..."
          onChange={handleChange}
          value={searchInput}/>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" onClick={handleButton} className='icon'/>
      </form>
      <div id="loading">Loading...</div>
      <div className="countries" id="countries"></div>
    </div>
  );
}

export default Homepage;
