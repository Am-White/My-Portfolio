import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import PageOne from './components/Pages/PageOne';
import PageTwo from './components/Pages/PageTwo';
import PageThree from './components/Pages/PageThree';
import PageFour from './components/Pages/PageFour';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/PageOne" element={<PageOne/>} />
        <Route path="/PageTwo" element={<PageTwo/>} />
        <Route path="/PageThree" element={<PageThree/>} />
        <Route path="/PageFour" element={<PageFour/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
