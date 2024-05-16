import React from 'react';
import './App.css';


import SkillsSection from './components/SkillsSection';
import Footer from './components/common/Footer';
import Navbar from './components/common/NavBar';
import Education from './components/Education';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <About/>
      <Education/>
         <SkillsSection/>
       
    
        <Footer/>
    </div>
  );
}

export default App;