// import styles from './style.module.css';
import React from 'react';
import Link from 'next/link';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const links = [
    { href: '/about', text: 'About'},
    { href: '/experience', text: 'Experience'},
    { href: '/work', text: 'Work'},
    { href: '/contact', text: 'Contact'},
];

export default function Navigation({ toggleMenu, menuOpen }) {

    return (
        <nav className="fixed top-0 left-0 w-full py-2 bg-gray-50/90 dark:dark:bg-[var(--dark)] backdrop-blur-sm z-[100] transition-all duration-300 ease-in">
            <div className="container flex justify-between items-center">
                {/* Logo/Portfolio section */}
                <div className="flex items-center">
                    <a href="#" className="text-2xl font-bold">
                        <span className="text-primary">JT</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation links */}
                <div className={`nav-links ${menuOpen ? 'active' : ''} flex items-center gap-8`}>
                    <a href="#home" className="nav-link btn-navbar">
                        Home
                    </a>
                    <a href="#about" className="nav-link btn-navbar">
                        About
                    </a>
                    <a href="#projects" className="nav-link btn-navbar">
                        Projects
                    </a>
                    <a href="#skills" className="nav-link btn-navbar">
                        Skills
                    </a>
                    <a href="#contact" className="nav-link btn-navbar">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}