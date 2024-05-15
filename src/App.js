import React from 'react';
import './App.css';


import SkillsSection from './components/SkillsSection';
import Footer from './components/common/Footer';
import Navbar from './components/common/NavBar';
import Education from './components/Education';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
        
        
         <SkillsSection/>
         <Education/>
    
        <Footer/>
    </div>
  );
}

export default App;