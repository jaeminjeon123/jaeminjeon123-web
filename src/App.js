import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
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