import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div class="container">
        <div class="navbar">
        <nav>
            <ul className='nav'>
                <Link to='/'><li>Home</li></Link>
                <Link to="/skillsandprojects"><li>Skills/Projects</li></Link>
                <Link to="/education"><li>Education</li></Link>
                <Link to="/work"><li>Work Experience</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
        </div>
        </div>
    );
}

export default Navigation;