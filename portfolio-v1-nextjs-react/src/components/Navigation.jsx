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
        // <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 z-50 shadow-md">
        //     <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        //         <h1 className="text-2xl font-bold">Alex</h1>
        //         <ul className="flex space-x-6 text-gray-300">
        //             <li><a href="#about" className="hover:text-white">About</a></li>
        //             <li><a href="#projects" className="hover:text-white">Projects</a></li>
        //             <li><a href="#contact" className="hover:text-white">Contact</a></li>
        //         </ul>
        //     </nav>
        // </header>


        // <nav className='fixed top-0 left-0 w-full py-[1rem] px-[0] z-[100]  transition-all duration-300 ease-in bg-white bg-opacity-80 shadow-md'>








        // <nav style={{
        //     position: 'fixed',
        //     top: 0,
        //     left: 0,
        //     width: '100%',
        //     padding: '0.5rem 0',
        //     backgroundColor: 'rgba(249, 250, 251, 0.9)',
        //     backdropFilter: 'blur(10px)',
        //     zIndex: 100,
        //     transition: 'all 0.3s ease'
        // }}>
        //     <div className="container" style={{
        //         display: 'flex',
        //         justifyContent: 'space-between',
        //         alignItems: 'center'
        //     }}>
        //         <div style={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             justifyContent: 'center'
        //         }}>
        //             <a href="#" style={{
        //                 fontSize: '1.5rem',
        //                 fontWeight: 700
        //             }}>
        //                 <span className='text-primary'>My Portfolio</span>
        //             </a>
        //         </div>

        //         <button className="mobile-menu-btn" onClick={toggleMenu}>
        //             <i className={`fas ${menuOpen ? <FaTimes color='black'/> : <FaBars />}`}></i>
        //         </button>

        //         <div className={`nav-links ${menuOpen ? 'active' : ''}`} style={{
        //             display: 'flex',
        //             gap: '2rem',
        //             justifyContent: 'center',
        //             alignItems: 'center'
        //         }}>
        //             <a href="#home" className="nav-link" style={{
        //                 color: 'var(--gray)',
        //                 fontWeight: 500
        //             }}>Home</a>
        //             <a href="#about" className="nav-link" style={{
        //                 color: 'var(--gray)',
        //                 fontWeight: 500
        //             }}>About</a>
        //             <a href="#projects" className="nav-link" style={{
        //                 color: 'var(--gray)',
        //                 fontWeight: 500
        //             }}>Projects</a>
        //             <a href="#skills" className="nav-link" style={{
        //                 color: 'var(--gray)',
        //                 fontWeight: 500
        //             }}>Skills</a>
        //             <a href="#contact" className="nav-link" style={{
        //                 color: 'var(--gray)',
        //                 fontWeight: 500
        //             }}>Contact</a>
        //         </div>
        //     </div>
        // </nav>


        <nav className="fixed top-0 left-0 w-full py-2 bg-gray-50/90 backdrop-blur-sm z-[100] transition-all duration-300 ease-in">
            <div className="container flex justify-between items-center">
                {/* Logo/Portfolio section */}
                <div className="flex items-center">
                    <a href="#" className="text-2xl font-bold">
                        <span className="text-primary">JT</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                {/* <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button> */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation links */}
                <div className={`nav-links ${menuOpen ? 'active' : ''} flex items-center gap-8`}>
                    <a href="#home" className="nav-link text-[var(--gray)] font-medium hover:text-[var(--primary)] transition-colors">
                        Home
                    </a>
                    <a href="#about" className="nav-link text-[var(--gray)] font-medium hover:text-[var(--primary)] transition-colors">
                        About
                    </a>
                    <a href="#projects" className="nav-link text-[var(--gray)] font-medium hover:text-[var(--primary)] transition-colors">
                        Projects
                    </a>
                    <a href="#skills" className="nav-link text-[var(--gray)] font-medium hover:text-[var(--primary)] transition-colors">
                        Skills
                    </a>
                    <a href="#contact" className="nav-link text-[var(--gray)] font-medium hover:text-[var(--primary)] transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}