import React from 'react';
import Project from './Project';
import './Project.css';

const ProjectList = () => {
  const projects = [
    {
      title: "병해 탐지 및 피해 현황 파악 서비스",
      description: "리액트를 학습하며 제작한 데스크탑 페이지입니다.",
      features: ["할 일 추가", "삭제", "체크", "중요표시"],
      link: "https://www.notion.so/Projects-9f656dfc7e5647099683985880edfff5",
      image: `${process.env.PUBLIC_URL}/first.png`
    },
    {
      title: "커리어허브",
      description: "Another project description goes here.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      link: "https://github.com/jaeminjeon123/CCC",
      image: `${process.env.PUBLIC_URL}/first.png`
    },
    {
        title: "tetrist",
        description: "Another project description goes here.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        link: "https://github.com/jaeminjeon123/CCC",
        image: `${process.env.PUBLIC_URL}/tetrist.png`
      },
    // 더 많은 프로젝트를 추가할 수 있습니다.
  ];

  return (
    <div className="project-list">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          features={project.features}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectList;
