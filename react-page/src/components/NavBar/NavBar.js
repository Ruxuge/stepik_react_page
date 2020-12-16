import React from 'react'
import './NavBar.scss'

export default function NavBar() {
    return (
        <header className="navigation">
            <p>Navigation Bar</p>
            <nav className="menu-bar-w">
                <ul className="txdn navigation-bar">
                    <li><a className="nav-element" href="#">Home</a></li>
                    <li><a className="nav-element" href="#">About</a></li>
                    <li><a className="nav-element" href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
