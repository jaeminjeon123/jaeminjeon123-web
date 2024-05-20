import React from 'react';
import './App.css';


import SkillsSection from './components/SkillsSection.tsx';
import Footer from './components/common/Footer.tsx';
import Navbar from './components/common/NavBar.tsx';
import Education from './components/Education.tsx';
import About from './components/About.tsx';
import ProjectList from './components/ProjectList';
import Career from './components/Career.tsx';

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