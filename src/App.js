import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import SkillsHeader from './components/SkillsHeader';
import SkillsSection from './components/SkillsSection';
function App() {
  return (
    <div className="App">
         <SkillsHeader />
         <SkillsSection/>
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  );
}

export default App;