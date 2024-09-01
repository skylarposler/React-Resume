import './App.css';
import React from 'react';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Nav';
import Education from './pages/Education';
import WorkExperience from './pages/Work';
import SkillsAndProjects from './pages/Skills&Projects';
import Contact from './pages/Contact';


function App() {
  return (
      <Router>
        <Navigation />
        <header className='App-Header'>
        <img src="./assets/images/ReactResumeLogo.png" className="App-logo" alt="logo" />
        <h1>Skylar Posler's React Resume</h1>
        </header>
        
        <main>
        <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/SkillsAndProjects" element={<SkillsAndProjects />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/Work" element={<WorkExperience />} />
                <Route path="/Contact" element={<Contact />} />
        </Routes>
        </main>

        <footer>
          <p>&copy; <strong>2024 Skylar Posler. All Rights Reserved.</strong></p>
        </footer>

      </Router>
  );
}

export default App;
