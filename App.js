import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import signin from './signin';

function App() {
  return (
  <div>
     <Registration/>
  </div>

  );
}

export default App;
