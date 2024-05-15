import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import Footer from './components/common/Footer';
import Navbar from './components/common/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
         <Header />
         <SkillsSection/>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <Footer/>
    </div>
  );
}

export default App;