import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
}
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/endpoint/');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


export default App;
