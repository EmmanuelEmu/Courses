import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Course from './Components/Courses/Course';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
