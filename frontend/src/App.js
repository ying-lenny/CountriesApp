import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Homepage from './pages/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <div className="body">
        <Routes>
          <Route exact path="/CountriesApp" element={<Homepage/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
