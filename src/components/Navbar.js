import React from 'react';
import logo from '../assets/logo.png';
import '../style/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary " style={{backgroundColor: "#ffffff"}}>

      <div className="container-fluid">
        <a className="navbar-brand  " href="#"><img className="App-logo ms-3" src={logo} alt="logo" width="200" /></a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-3" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#aboutme">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          
        </div>
      </div>

    </nav>

  )
}
