import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './components/menu/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;