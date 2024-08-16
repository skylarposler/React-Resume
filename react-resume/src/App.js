import './App.css';
import React from 'react';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Nav';
import Education from './pages/Education';


function App() {
  return (
      <Router>
        <Navigation />
        <header className='App-Header'>
        <h1>Skylar's React Resume</h1>
          <img src="./assets/images/ReactResumeLogo.png" className="App-logo" alt="logo" />
        </header>
        
        <main>
        <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Education" element={<Education />} />
        </Routes>
        </main>

        <footer>
          <p>&copy; <strong>2024 Skylar Posler. All Rights Reserved.</strong></p>
        </footer>

      </Router>
  );
}

export default App;
