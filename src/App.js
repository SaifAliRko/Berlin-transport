import './index.css'
import axios from 'axios'
import { useEffect, useState } from "react"
import StopDisplayer from './StopDisplayer'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import StopDetails from './StopDetails';
import Spinner from './Spinner';
import Favorites from './Favorites';
import Navbar from './Navbar';

// use Id to get detailed page 
// we also need departures in the stops details page
// https://v5.vbb.transport.rest/stops/900000017101

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/stopDetails/:id/" element={ <StopDetails /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </div>
  );
}

export default App;
