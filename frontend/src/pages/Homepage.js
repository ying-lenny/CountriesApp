import React, { useState } from 'react';
import { getSearchResults } from '../api/backend';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
import Disclaimer from '../Components/Disclaimer';

function Homepage() {

  const [searchInput, setSearchInput] = useState("");
  // selecting loading div
  const loader = document.querySelector("#loading");

  //Frontend call to backend to get list of countries
  const loadCountryAPI = (name) =>{
    // fetch url of rest country from website
    getSearchResults(name)
    .then(data => {
      hideLoading()
      displayCountries(data)})
}

  // displaying all countries
  const displayCountries = countries =>{
    // Catches error on return
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

  // As text is entered into searchbox, the searchInput value is updated
  const updateSearchString = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // Takes entered string and posts to backend if it's valid
  const searchPrompt = (e) => {
    e.preventDefault();
    //If string is over 3 characters, it is valid
    if (searchInput.length >= 3) {
    displayLoading()
    loadCountryAPI(searchInput)
    // If under 3 characters, it is invalid
    } else {
      alert("Value too small")
    }
  };

  // Refreshes page on click
  function refreshPage() {
    window.location.reload();
  }

  // Displays loading class upon searching for countries
  function displayLoading() {
    loader.classList.add("display");
  }

  // hides loading upon search results returning
  function hideLoading() {
    loader.classList.remove("display");
  }

  return (
    <div className="App">
      <Disclaimer/>
      <form className="form" onSubmit={searchPrompt}>
        <FontAwesomeIcon icon={faHouse} size="2xl" onClick={refreshPage} className='icon'/>
        <input id="search" type="text" className="input" placeholder="Enter a country..."
          onChange={updateSearchString}
          value={searchInput}/>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" onClick={searchPrompt} className='icon'/>
      </form>
      <div id="loading">
        Loading... <br/>
        If loading is taking too long, please try revisiting the live backend and refreshing it
      </div>
      <div className="countries" id="countries"></div>
    </div>
  );
}

export default Homepage;
