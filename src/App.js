import React from 'react';
import './App.css';


import SkillsSection from './components/SkillsSection';
import Footer from './components/common/Footer.tsx';
import Navbar from './components/common/NavBar.tsx';
import Education from './components/Education';
import About from './components/About.tsx';
import ProjectList from './components/ProjectList';

import Career from './components/Career';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <About/>
      <Education/>
      <Career/>
         <SkillsSection/>
         <ProjectList />
    
        <Footer/>
    </div>
  );
}

export default App;