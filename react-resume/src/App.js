import './App.css';
import React from 'react';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Nav';


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
                <Route path="/homepage" element={<HomePage />} />
        </Routes>
        </main>

        <footer>
          <p>&copy; <strong>2024 Skylar Posler. All Rights Reserved.</strong></p>
        </footer>

      </Router>
  );
}

export default App;
