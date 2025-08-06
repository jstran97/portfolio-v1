'use client';

import { useEffect } from 'react';
import React from 'react';
import styles from './page.module.css';
import gsap from 'gsap';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import DarkModeToggleButton from '../components/DarkModeToggle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



// // app/page.tsx
// "use client";

// import React from 'react';
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import Navigation from '../components/navigation/navigation';

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [projects, setProjects] = React.useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Tailwind CSS.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "/api/placeholder/600/400",
      tags: ["React", "GSAP", "CSS3", "Responsive Design"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Redux", "Node.js", "Express"],
      link: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard showing real-time weather data from around the world.",
      image: "/api/placeholder/600/400",
      tags: ["JavaScript", "API Integration", "CSS Grid", "Chart.js"],
      link: "#"
    }
  ]);

  React.useEffect(() => {
    // Initialize GSAP animations
    const initAnimations = () => {
      gsap.registerPlugin(ScrollTrigger);

      // Hero section animation
      gsap.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // About section animation
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about',
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });

      // Projects animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects',
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
      });

      // Skills animation
      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: '.skills',
          start: "top 80%"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1
      });

      // Contact animation
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: '.contact',
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8
      });
    };

    // Initialize animations after a short delay to ensure DOM is ready
    setTimeout(initAnimations, 100);
  }, []);

  React.useEffect(() => {
    // Apply dark mode to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.utils.toArray(".fade-in").forEach((el, any) => {
  //     gsap.from(el, {
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //   });
  // }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-white font-sans">
      {/* className="min-h-screen bg-white dark:bg-gray-900 text-white font-sans" */}
      {/* <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 z-50 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alex</h1>
          <ul className="flex space-x-6 text-gray-300">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </header> */}
      <Navigation
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />

      <HeroSection
        darkMode={darkMode}
      />

      {/* <section className="h-screen flex items-center justify-center text-center pt-20">
        <div>
          <h1 className="text-6xl font-bold mb-4">Hi, I'm Alex</h1>
          <p className="text-xl text-gray-400">Creative Developer & Designer</p>
        </div>
      </section> */}
{/*
      <section id="about" className="fade-in py-24 px-4 md:px-20 bg-gray-800">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <p className="text-gray-300 max-w-3xl">
          I'm a passionate developer who loves crafting interactive web experiences using modern technologies. With a background in design and development, I enjoy bringing ideas to life through code and creativity.
        </p>
      </section> */}
      <AboutSection
        darkMode={darkMode}
      />



      {/* <section id="projects" className="fade-in py-24 px-4 md:px-20 bg-gray-900">
        <h2 className="text-4xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Portfolio Website",
              description: "Built with Next.js, Tailwind CSS, and GSAP animations."
            },
            {
              title: "E-commerce App",
              description: "Interactive product pages and smooth scroll effects."
            },
            {
              title: "Blog Platform",
              description: "Markdown-based blog with custom CMS integration."
            }
          ].map((project, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section> */}
      <ProjectSection
        darkMode={darkMode}
        projects={projects}
      />

      <SkillSection
        darkMode={darkMode}
      />

      <ContactSection
        darkMode={darkMode}
      />

      <FooterSection
        darkMode={darkMode}
      />

      <DarkModeToggleButton
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      {/* <section id="contact" className="fade-in py-24 px-4 md:px-20 bg-gray-800">
        <h2 className="text-4xl font-semibold mb-8">Contact</h2>
        <div className="space-y-4">
          <p className="text-gray-300">Email: alex@example.com</p>
          <p className="text-gray-300">LinkedIn: linkedin.com/in/alexdev</p>
          <p className="text-gray-300">GitHub: github.com/alexdev</p>
        </div>
      </section> */}
    </main>
  );
}
