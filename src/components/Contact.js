import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaMailBulk, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
        <div className='aboutme container-fluid py-5 ' id='contact'>
            <h3 className='fs-1 ps-4 fw-bold'>Contact</h3>
            <ul className='fs-2 mt-5 box'>
                <li data-aos="fade-up" data-aos-duration="1000">

                    <FaPhone /> +56 9 6298 0907
                </li>
                <li data-aos="fade-up" data-aos-duration="3000">

                    <FaLinkedin /> https://www.linkedin.com/in/karina-paez-astudillo/
                </li>
                <li data-aos="fade-up" data-aos-duration="5000">
                    <FaGithub /> https://github.com/KPaezAstudillo
                </li>
                <li data-aos="fade-up" data-aos-duration="7000">
                    <FaMailBulk /> karinapaezastudillo@gmail.com
                </li>
                <li data-aos="fade-up" data-aos-duration="9000">
                    <FaInstagram /> @karinapaez
                </li>
            </ul>


        </div>
    )
}
