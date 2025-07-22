import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import "./fonts/VirgulaVulgarisBold.ttf"
import Landing from './components/landing/Landing';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">      
      <Navbar></Navbar>
      <Landing></Landing>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
