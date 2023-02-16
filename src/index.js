import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <AboutMe />
    <Projects />
    <Footer />
  </React.StrictMode>
);
