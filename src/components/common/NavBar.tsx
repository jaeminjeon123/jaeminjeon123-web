import React, { useState, useEffect, useCallback } from 'react';
import './NavBar.scss';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(event.target)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen, handleClickOutside]);

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
      setMenuOpen(false); // 섹션으로 스크롤 후 메뉴 닫기
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`${entry.target.id} is intersecting`);
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? 'expanded' : ''}`}>
      <div className="logo">{logoText}</div>
      <div className="menu-icon" onClick={toggleMenu}>☰</div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li className={activeSection === 'About' ? 'active' : ''} onClick={() => scrollToSection('About')}>About</li>
        <li className={activeSection === 'education' ? 'active' : ''} onClick={() => scrollToSection('education')}>Education</li>
        <li className={activeSection === 'career' ? 'active' : ''} onClick={() => scrollToSection('career')}>Career</li>
        <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</li>
        <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</li>
        <li className={activeSection === 'Side' ? 'active' : ''} onClick={() => scrollToSection('Side')}>Side</li>
        <li className={activeSection === 'Contact' ? 'active' : ''} onClick={() => scrollToSection('Contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;