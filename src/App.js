import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/Pages/AboutMe';
import ExperienceAndSkills from './components/Pages/ExperienceAndSkills';
import Projects from './components/Pages/Projects';
import ContactInfo from './components/Pages/ContactInfo';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/ExperienceAndSkills" element={<ExperienceAndSkills/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/ContactInfo" element={<ContactInfo/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
