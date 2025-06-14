import { useState } from 'react'
import './index.css'; 
import Hero from './Hero'
import About from './About'
import Timeline from './Timeline';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './assets/Contact';
import Projects from './Projects';

function App() {

  return (
     <div>
      <Hero />
      <About />
      {/* <Projects /> */}
     <Skills />
     <Portfolio />
     <Contact />
    </div>
  )
}

export default App
