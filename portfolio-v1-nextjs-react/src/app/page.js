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

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [projects, setProjects] = React.useState([
    {
      id: 1,
      title: "Facial Recognition Web Application",
      description: "A web app for detecting people's faces in the submitted photo. Each photo submission increases the user's entry count, which is stored in the database.",
      image: "/videos/FacialRecognitionWebApp_Demo.mp4",
      mediaType: "video",
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Express.js", "REST API", "Postman", "Machine Learning API (Clarifai)", "MacOS", "Render"],
      link: "https://github.com/jstran97/ztm-smartbrain"
    },
    {
      id: 2,
      title: "RoboFriends Web Application",
      description: (
        <>
          A web app displaying a list of different robot profiles. Search function allows user to locate the desired robot profile(s). Profile pictures are from
          <a href="https://robohash.org/" target="_blank" rel="noopener noreferrer" className="hyperlink">
            {' '}robohash.org
          </a>, and the profile objects are from
          <a href="https://jsonplaceholder.typicode.com/users/" target="_blank" rel="noopener noreferrer" className="hyperlink">
            {' '}jsonplaceholder.typicode.com
          </a>.
        </>
      ),
      image: "/videos/RoboFriendsHooks_Demo.mp4",
      mediaType: "video",
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Render"],
      link: "https://github.com/jstran97/ztm-robofriends-hooks"
    },
    {
      id: 3,
      title: "Password Checker",
      description: "Script utilizing data from Password API URL to determine if user-inputted password(s) are previously hacked. Checks and generates output based on how many times user password(s) were part of data breaches.",
      image: "videos/PasswordChecker_Demo.mp4",
      mediaType: "video",
      tags: ["Python", "Password API", "SHA1 Hash Algorithm"],
      link: "https://github.com/jstran97/password-checker"
    },
    {
      id: 4,
      title: "Senior Design: Smart Hydroponic System",
      description: "Smart hydroponic system where plants can grow without soil using nutrient-enriched water and with the help of electric motors, Internet of Things (IoT) Connectivity, and a mobile application.",
      image: "/images/SmartHydroponicSystem_Prototype_May2020.png",
      mediaType: "image",
      tags: ["Arduino", "Google Firebase", "Internet of Things (IoT) Connectivity", "C"],
      link: "https://github.com/jstran97/Smart_Underwater_Hydroponics_System"
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
        y: 0,
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
        y: 0,
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
        scale: 1,
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Contact from Portfolio Website");
    const body = encodeURIComponent("Hi Justin, I saw your portfolio and...");
    window.location.href = `mailto:justin.s.tran97@gmail.com?subject=${subject}&body=${body}`;
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
    <main className="min-h-screen bg-white dark:bg-[var(--dark)] font-sans">
      <Navigation
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
      <HeroSection/>
      <AboutSection/>
      <ProjectSection
        projects={projects}
      />
      <SkillSection/>
      <ContactSection
        handleEmail={handleEmail}
      />
      <FooterSection/>
    </main>
  );
}
