import React, { useState, useEffect } from 'react';
import Project from './Project';
import './Project.css';

const ProjectList = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "병해 탐지 및 피해 현황 파악 서비스",
      description: "병해를 판별해 사용자에게 결과를 알려주고, 신고 기능과 지도로 피해 현황을 제공하여 예방에 도움을 주는 서비스",
      link: "https://www.notion.so/Projects-9f656dfc7e5647099683985880edfff5",
      image: `${process.env.PUBLIC_URL}/first.png`,
      retrospective: "이 프로젝트는 병해를 빠르게 감지하여 농업 생산성 향상에 기여한 점이 기억에 남습니다."
    },
    {
      id: 2,
      title: "커리어허브",
      description: "구인 공고 공유 사이트 개발자들을 위한 취업정보(채용정보) 공유 사이트",
      link: "https://github.com/jaeminjeon123/CCC",
      image: `${process.env.PUBLIC_URL}/first.png`,
      retrospective: "개발자 취업 정보를 체계적으로 관리할 수 있어 사용자들의 반응이 좋았습니다."
    },
    {
      id: 3,
      title: "TETRIST",
      description: "웹 socket과 react를 사용해서 구현한 1:1 레트로 감성의 대전 테트리스 게임",
      link: "https://github.com/sesac-laters-team/tetrist",
      image: `${process.env.PUBLIC_URL}/tetrist1.png`,
      retrospective: "실시간 대전 게임을 구현하며 실시간 통신의 중요성을 깨달았습니다."
    },
  ];

  const handleProjectClick = (id) => {
    setActiveProject((prevActiveProject) => (prevActiveProject === id ? null : id));
  };

  return (
    <div className="project-list">
      <section id="projects">
        <h2>Projects</h2>
        {isMobile && <p className="click-message">프로젝트들을 클릭해보세요!</p>}
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            retrospective={project.retrospective}
            isActive={activeProject === project.id}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
