import React, { useState, useEffect } from 'react';
import Project from './Project.tsx';
import './Project.scss';

const ProjectList: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
      title: "Ramyun Lab",
      description: "원하는 라면을 손쉽게 찾을 수 있는 라면 모음 사이트",
      links: [
        { url: "https://github.com/RamyunLab/ramyunlab-fe", label: "GitHub" },
        { url: "https://www.notion.so/Ramyun-Lab-0553dbaf6aed48a283a42fe1c5e614ac?pvs=4", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/ramyun1.png`,
      retrospective: ""
    },
  
    {
      id: 2,
      title: "커리어허브",
      description: "구인 공고 공유 사이트 개발자들을 위한 취업정보(채용정보) 공유 사이트",
      links: [
        { url: "https://github.com/jaeminjeon123/CCC", label: "GitHub" },
        { url: "https://www.notion.so/9087af1768cb42cc80912ffd8a1c3253?pvs=4", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/ccc.png`,
      retrospective: ""
    },
    {
      id: 3,
      title: "병해 탐지 및 피해 현황 파악 서비스",
      description: "병해를 판별해 사용자에게 결과를 알려주고, 신고 기능과 지도로 피해 현황을 제공하여 예방에 도움을 주는 서비스",
      links: [
        { url: "https://github.com/TellMeThe-Answer/Client/tree/jeonjaemin", label: "GitHub" },
        { url: "https://www.notion.so/9f656dfc7e5647099683985880edfff5?pvs=4", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/first.png`,
      retrospective: ""
    },
    
    // {
    //   id: 4,
    //   title: "포트폴리오",
    //   description: "리액트를 곁들인 평양냉면 같은 슴슴한 포트폴리오",
    //   links: [
    //     { url: "https://github.com/jaeminjeon123/jaeminjeon123-web", label: "GitHub" },
    //     { url: "https://www.notion.so/b3ddd6c5f89b4e9e81d4ff2d5efc3f6c?pvs=4", label: "Notion" }
    //   ],
    //   image: `${process.env.PUBLIC_URL}/por.png`,
    //   retrospective: ""
    // },
    
  ];

  const handleProjectClick = (id: number) => {
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
            links={project.links}
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