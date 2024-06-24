import React, { useState, useEffect } from 'react';
import Side from './Side.tsx';
import './Project.scss';

const SideList: React.FC = () => {
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
      title: "TETRIST",
      description: "웹 socket과 react를 사용해서 구현한 1:1 레트로 감성의 대전 테트리스 게임",
      links: [
        { url: "https://github.com/sesac-laters-team/tetrist", label: "GitHub" },
        { url: "https://www.notion.so/5b716565b29d4cf694abc3bb3b842d50?pvs=4", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/tetrist1.png`,
      retrospective: ""
    },
    {
      id: 2,
      title: "포트폴리오",
      description: "리액트로 만든 평양냉면 같은 슴슴한 포트폴리오",
      links: [
        { url: "https://github.com/jaeminjeon123/jaeminjeon123-web", label: "GitHub" },
        { url: "https://www.notion.so/b3ddd6c5f89b4e9e81d4ff2d5efc3f6c?pvs=4", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/por.png`,
      retrospective: ""
    },
    
  ];

  const handleProjectClick = (id: number) => {
    setActiveProject((prevActiveProject) => (prevActiveProject === id ? null : id));
  };

  return (
    <div className="project-list">
      <section id="Side">
        <h2>Side</h2>
        {isMobile && <p className="click-message">프로젝트들을 클릭해보세요!</p>}
        {projects.map((project) => (
          < Side
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

export default SideList;