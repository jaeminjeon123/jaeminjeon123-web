import React, { useState, useEffect } from 'react';
import Project from './Project.tsx';
import './Project.css';

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
      title: "병해 탐지 및 피해 현황 파악 서비스",
      description: "병해를 판별해 사용자에게 결과를 알려주고, 신고 기능과 지도로 피해 현황을 제공하여 예방에 도움을 주는 서비스",
      links: [
        { url: "https://github.com/TellMeThe-Answer/Client/tree/jeonjaemin", label: "GitHub" },
        { url: "https://example.com/second-link", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/first.png`,
      retrospective: "이 프로젝트는 졸업 과제로 참여한 캡스톤 디자인입니다. 제가 담당한 역할은 프론트엔드에서의 기능들이었습니다. 이 과정에서  JSON데이터를 가공하는 방법과 공공 API를 다루는 방법에 대해서 알게 되었으며, 개발자의 꿈을 가지게 되었습니다."
    },
    {
      id: 2,
      title: "커리어허브",
      description: "구인 공고 공유 사이트 개발자들을 위한 취업정보(채용정보) 공유 사이트",
      links: [
        { url: "https://github.com/jaeminjeon123/CCC", label: "GitHub" },
        { url: "https://example.com/second-link", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/ccc.png`,
      retrospective: "제가 개발자로 진로를 결심하고 처음으로 진행한 프로젝트입니다. 순수 바닐라 JavaScript로 작성되었으며, 메인 페이지 개발을 맡았습니다. 기획이 러프하게 진행되면서 각 페이지 외에 필요한 기능이 점점 늘어나게 되었고, 그 기능들이 모두 제 페이지에 집중되었습니다. 특히, 뒤늦게 상태 관리를 진행하면서 많은 어려움을 겪었습니다. 상태 관리가 비동기로 처리된다는 사실을 알고 있었지만, 함수의 순서에 따라 코드 실행의 흐름과 결과에 큰 영향을 미칠 수 있다는 것을 이 프로젝트를 통해 깨닫게 되었습니다. 또한 제가 많은 기능을 담당하게 되면서 프론트엔드에 대한 자신감이 붙은 계기가 되었던 것 같습니다."
    },
    {
      id: 3,
      title: "TETRIST",
      description: "웹 socket과 react를 사용해서 구현한 1:1 레트로 감성의 대전 테트리스 게임",
      links: [
        { url: "https://github.com/sesac-laters-team/tetrist", label: "GitHub" },
        { url: "https://example.com/second-link", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/tetrist1.png`,
      retrospective: "처음 기획 당시, 팀원들 중 많은 이들이 웹소켓과 React를 이용해 개발을 하고 싶어했습니다. 그렇게 게임 개발에 초점이 맞춰졌고, 최종적으로 테트리스를 만들기로 결정했습니다. 게임 로직은 한 사람이 담당하게 되었고, 저는 간단한 기능들과 전체적인 CSS, 인터랙션에 집중하게 되었습니다. 특히 React에서 완벽한 반응형 디자인을 구현하기 위해 많은 노력을 기울였습니다. 이 프로젝트를 통해 CSS와 사용자 인터랙션 디자인에 대한 이해를 깊게 할 수 있었습니다. 이전에는 반응형 웹 디자인의 섬세한 구현 방법에 대해 잘 알지 못했지만, 이번 프로젝트를 통해 그 중요성과 구체적인 구현 방법을 배울 수 있었습니다."
    },
    {
      id: 4,
      title: "포트폴리오",
      description: "리액트로 만든 슴슴한 포트폴리오",
      links: [
        { url: "https://github.com/jaeminjeon123/jaeminjeon123-web", label: "GitHub" },
        { url: "https://example.com/second-link", label: "Notion" }
      ],
      image: `${process.env.PUBLIC_URL}/por.png`,
      retrospective: "이 프로젝트는 클론 코딩이나 팀 프로젝트가 아닌, 제 아이디어와 기획을 바탕으로 처음으로 혼자 완성한 프로젝트입니다. 다른 사람이 만든 템플릿을 사용하고 싶지 않아, 제가 추구하는 깔끔한 스타일을 반영한 저만의 포트폴리오를 만들고자 했습니다. 개발 과정에서 모바일에서는 클릭 이벤트를, 데스크탑에서는 호버 이벤트를 사용하여 사용자 경험을 향상시키는 데 중점을 두었습니다. 이 과정에서 이벤트 버블링 문제에 직면하게 되었고, 이를 해결하기 위해 e.preventDefault()와 e.stopPropagation()을 사용하여 상위 요소에 이벤트가 전파되지 않도록 하는 데 많은 노력을 기울였습니다."
    },
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