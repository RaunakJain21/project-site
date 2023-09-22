// import React, { Component } from 'react'
import about from './images/about.png';
import './about.css';
function About() {
    return (
      <div id="about" className=" sm:w-9/12 w-11/12  text-black m-auto mt-20 bg-white p-5 animate hover:typewriter">
      <h1 className='sm:text-5xl text-3xl font-extrabold text-center hover:underline mx-auto mt-10 p-5'>About Us</h1>
      <p className='sm:text-2xl text-base  p-2 sm:ml-10 ml-5 mr-5 mb-10 sm:mr-10 mt-5'>Welcome to our innovative initiative dedicated to empowering children in India with legal literacy and awareness through an engaging and interactive gamified platform. We are passionate advocates for children's rights and firmly believe that knowledge is the first step towards empowerment. Our mission is to equip young minds with the understanding of their rights and responsibilities, fostering a generation of informed and confident individuals who can shape a brighter future for themselves and their communities.</p>
       
      </div>
    );
  }
  
  export default About;