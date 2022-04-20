import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../app.feature/group/component/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
