import React from 'react';
import Project from './Project';
import './Project.css';

const ProjectList = () => {
  const projects = [
    {
      title: "병해 탐지 및 피해 현황 파악 서비스",
      description: "병해를 판별해 사용자에게 결과를 알려주고, 신고 기능과 지도로 피해 현황을 제공하여 예방에 도움을 주는 서비스",
      link: "https://www.notion.so/Projects-9f656dfc7e5647099683985880edfff5",
      image: `${process.env.PUBLIC_URL}/first.png`
    },
    {
      title: "커리어허브",
      description: "구인 공고 공유 사이트 개발자들을 위한 취업정보(채용정보) 공유 사이트",
      link: "https://github.com/jaeminjeon123/CCC",
      image: `${process.env.PUBLIC_URL}/first.png`
    },
    {
      title: "TETRIST",
      description: "웹 socket과 react를 사용해서 구현한 1:1 레트로 감성의 대전 테트리스 게임",
      link: "https://github.com/sesac-laters-team/tetrist",
      image: `${process.env.PUBLIC_URL}/tetrist1.png`
    },
    // 더 많은 프로젝트를 추가할 수 있습니다.
  ];

  return (
    <div className="project-list">
        <section id='projects'>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
   </section>
    </div>
  );
};

export default ProjectList;
