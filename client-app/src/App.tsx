import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { ducks } from './demo';
// import DuckItem from './DuckItem';




function App() {
 const [activities,setActivities] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:5000/api/activities').then(response => {
    console.log(response)
    setActivities(response.data)
  })
 }, [])

  return (
    <div className="App">
      <header className="App-header">
          {/* {ducks.map(duck =>
            <DuckItem duck={duck} key={duck.name}/>
          )} */}
          <img src={logo} className='App-logo' alt="logo"></img>
          <ul>
            
          {activities.map((activity : any) => (
            <li key={activity.id}>
              {activity.title}
            </li>

          ))}
          </ul>

          {/* <p>Edit<code>src/App.tsx</code>and save to relod!!</p>
          <a className='App-link' 
             href='https://reactjs.orj/' 
             target='_blank' 
             rel="noopener noreferrer">
            Learn React
          </a> */}

      </header>
    </div>
  );
}

export default App;
