import React from 'react';
import styles from './Education.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Education = () => {
  const educationData = [
    {
      year: '2018-2024',
      degree: '지능기전공학부 무인이동체학과',
      school: 'Sejong University',
      description: ''
    },
    {
      year: '2024',
      degree: 'Sesac Fullstack BootCamp',
      school: '',
      description: '새싹 풀스택 개발자 과정 수료'
    }
  ];

  return (
    <section id='education' className={styles.education}>
      <h2>Education</h2>
      <div className={styles.educationList}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <i className="fas fa-graduation-cap"></i>
              <span className={styles.educationYear}>{edu.year}</span>
            </div>
            <div className={styles.educationContent}>
            <h4 className={styles.educationSchool}>{edu.school}</h4>
              <h3 className={styles.educationDegree}>{edu.degree}</h3>
             
              <p className={styles.educationDescription}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
