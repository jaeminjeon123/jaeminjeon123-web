import React from 'react';
import styles from './Career.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Career = () => {
  const careerData = [
    {
      period: '2021.11-2022.3',
      company: '원더베리',
      roles: ['QA', '제안서 작성','사무 보조'],
    },
  
  ];

  return (
    <section id='career' className={styles.career}>
      <h2>Career</h2>
      <div className={styles.careerList}>
        {careerData.map((job, index) => (
          <div key={index} className={styles.careerItem}>
            <div className={styles.careerHeader}>
              <i className="fas fa-building"></i>
              <span className={styles.careerPeriod}>{job.period}</span>
            </div>
            <div className={styles.careerContent}>
              <h3 className={styles.careerCompany}>{job.company}</h3>
              <p className={styles.careerRoles}>{job.roles.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
