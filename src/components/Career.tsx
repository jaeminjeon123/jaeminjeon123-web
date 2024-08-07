import React from 'react';
import styles from './Career.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface CareerData {
  period: string;
  company: string;
  roles: string[];
}

const careerData: CareerData[] = [
  {
    period: '2021.11-2022.3',
    company: '원더베리',
    roles: [
    '  사용자 경험을 위한 QA를 통한 지속적인 피드백을 했으며, 이를 바탕으로 제안서 작성을 하는 등 개발 직군 회사에서의 일을 전반적으로 이해하고 있습니다.'
    ],
  },
];

const Career: React.FC = () => {
  return (
    <section id="career" className={styles.career}>
      <h2>Career</h2>
      <div className={styles.careerList}>
        {careerData.map((job, index) => (
          <div key={index} className={styles.careerItem}>
            <div className={styles.careerHeader}>
              <i className={`fas fa-building ${styles.custom}`}></i>
              <span className={styles.careerPeriod}>{job.period}</span>
            </div>
            <div className={styles.careerContent}>
              <h3 className={styles.careerCompany}>{job.company}</h3>
              {job.roles.map((role, roleIndex) => (
                <p key={roleIndex} className={styles.careerRole}>{role}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
