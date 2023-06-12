import React from 'react';
// import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo';
import DuckItem from './DuckItem';


//import axios from 'axios';npm

function App() {

  return (
    <div className="App">
      <header className="App-header">
          {ducks.map(duck =>
            <DuckItem duck={duck} key={duck.name}/>
          )}
          <img src={logo} className='App-logo' alt="logo"></img>
          <p>Edit<code>src/App.tsx</code>and save to relod!!</p>
          <a className='App-link' 
             href='https://reactjs.orj/' 
             target='_blank' 
             rel="noopener noreferrer">
            Learn React
          </a>

      </header>
    </div>
  );
}

export default App;
