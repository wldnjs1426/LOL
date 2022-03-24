import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './components/Header'
import {stringify} from "querystring";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Headers/>
        <Main/>
    </div>
  );
}

export default App;
