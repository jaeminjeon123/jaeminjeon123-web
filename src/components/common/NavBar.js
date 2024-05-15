import React, { useState, useEffect } from 'react';
import './NavBar.css';

const useTypingEffect = (textArray, typingSpeed = 150, pauseDuration = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textArray.length);
        } else {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          setCharIndex((prev) => prev - 1);
        }
      } else {
        if (charIndex === textArray[currentIndex].length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, pauseDuration);
        } else {
          setDisplayedText((prev) => prev + textArray[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, charIndex, currentIndex, textArray, typingSpeed, pauseDuration, isPaused]);

  return displayedText;
};

const Navbar = () => {
  const logoText = useTypingEffect(['JunJaeMin', 'Frontend Developer'], 150, 5000);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 70; // 네비게이션 바의 높이에 맞게 조정
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <nav className="navbar">
      <div className="logo">{logoText}</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('skills')}>skills</li>
        <li onClick={() => scrollToSection('education')}>Education</li>
        <li onClick={() => scrollToSection('certification')}>Certification & Awards</li>
        <li onClick={() => scrollToSection('projects')}>Side Projects</li>
        <li onClick={() => scrollToSection('blog')}>My Blog</li>
        <li onClick={() => scrollToSection('Contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
