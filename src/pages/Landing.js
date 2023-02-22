import React from 'react';
import Header from '../components/Header.js'
import Course from '../components/Course.js';
import Hero from '../components/Hero.js';
import Job from '../components/Job.js';
import Question from '../components/Question.js';
import Works from '../components/Works.js';

function Landing() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Job />
      <Works />
      <Course />
      <Question />
    </div>
  );
}

export default Landing;
