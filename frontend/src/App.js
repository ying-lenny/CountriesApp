import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllUsers } from './api/backend';

function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="col-md-4">
          <DisplayBoard
            numberOfUsers={numberOfUsers}
            getAllUsers={fetchAllUsers}
          />
        </div>
        <div className="row mrgnbtm">
            <Users users={users}></Users>
        </div>
      </header>
    </div>
  );
}

export default App;
