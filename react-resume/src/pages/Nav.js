import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className='navbar'>
                <Link to='/'><li>Home</li></Link>
                <Link to="/education"><li>Education</li></Link>
            </ul>
        </nav>
    );
}

export default Navigation;