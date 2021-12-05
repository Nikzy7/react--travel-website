import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Navbar />
          } /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
