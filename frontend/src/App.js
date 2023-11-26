import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="body">
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
