import React, { useState, useEffect } from 'react';
import './App.css';
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllUsers, getIreland } from './api/backend';

function App() {

  //frontend external api call, works fine
  const loadCountryAPI = () =>{
    // fetch url of rest country from website
    // fetch('https://restcountries.com/v3.1/all')
    fetch('http://localhost:7000/api/ireland')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

  // displaying all countries
  const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    // displaying div to html
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
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


  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)

  // frontend call to backend, works fine
  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }, [])

  return (
    <div className="App">
        <div className="col-md-4">
          <DisplayBoard
            numberOfUsers={numberOfUsers}
            getAllUsers={fetchAllUsers}
          />
        </div>

        <div className="row mrgnbtm">
            <Users users={users}></Users>
        </div>
        <button onClick={loadCountryAPI}>
          Hello
        </button>
      <div className="countries" id="countries"></div>
    </div>
  );
}

export default App;
