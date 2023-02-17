import React, { useEffect } from 'react';
import '../style/main.css';
import img from '../assets/img.jpeg';
import 'aos/dist/aos.css'
import Aos from 'aos'

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className='main row' id='main'>
      <div className=' my-auto box-1 col-lg-4 col-md-5 col-12'>
        <img src={img} className=" img-fluid ms-4"></img>
      </div>
      <div className=' my-auto box-2 col-lg-8 col-md-7 col-12'>
        <div className='row'>
          <div className='col-lg-10 col-12 secondary-box opacity-50 mt-3 mx-auto' data-aos="fade-up">
            <h3 className=' fw-bold fs-1 hello-world'>Hello World! My name is Karina</h3>
            <p className=' fs-2 '>I am a Computer Science Engineer with experience in education and research, but now I am looking for an opportunity as a front-end or full-stack developer. I am passionate about science and technology, and that is why I believe that I can make great contributions from my perspective. </p>
          </div>
        </div>

      </div>
    </div>
  )
}
