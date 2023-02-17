import React, {useEffect} from 'react';
import '../style/aboutme.css';
import 'aos/dist/aos.css'
import Aos from 'aos';
import {faLocationDot, faLanguage, faSeedling, faCode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
  useEffect(() => {
    Aos.init();
}, [])
  return (
    <div className='aboutme container-fluid py-5'>
      <h3 className='fs-1 ps-4'>About Me</h3>
      <ul className='fs-2 mt-5 box'>
        <li data-aos="fade-up" data-aos-duration="1000">
        
        <FontAwesomeIcon icon={faCode}/> So... What can I tell you? I am a junior full-stack developer. I recently finished the 4Geeks Academy Bootcamp, a 3-month program where I used reactJS, HTML, CSS/Bootstrap, Git, SQLAlchemy and Python/Flask on a regular basis.
        </li>
        <li  data-aos="fade-up" data-aos-duration="3000">
        <FontAwesomeIcon icon={faLanguage} /> I am a Spanish native speaker with advanced level of spoken and written English.
        </li>
        <li  data-aos="fade-up" data-aos-duration="5000">
        <FontAwesomeIcon icon={faLocationDot} /> Based in Freirina, Chile, heart of the Atacama Desert.
        </li>
        <li  data-aos="fade-up" data-aos-duration="7000">
        <FontAwesomeIcon icon={faSeedling} /> I enjoy going outdoors, being with the people I love and my pets.
        </li>
      </ul>


    </div>
  )
}
