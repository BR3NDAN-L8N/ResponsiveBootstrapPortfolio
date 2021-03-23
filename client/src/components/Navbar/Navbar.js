import React from 'react';
import NavbarLink from './NavbarLink/NavbarLink';

//  STYLE imports
import './Navbar.css';

export default function Navbar() {

    return (
        <nav id="navbar">
            <NavbarLink
                name="Top"
                id="scroll-top"
            />

            <span className="nav-links">
                <NavbarLink
                    name="About"
                    id="about-section"
                />
                <NavbarLink
                    name="Projects"
                    id="projects-section"
                />
                <NavbarLink
                    name="Contact"
                    id="contact-section"
                />
            </span>
        </nav>
    )
}