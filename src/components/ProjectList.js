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
      retrospective: "이 프로젝트는 졸업 과제로 참여한 캡스톤 디자인입니다. 당시 저는 GitHub와 React에 대한 이해도가 부족했고, 컴포넌트를 나누는 기준이나 CSS에 대한 이해도도 미흡했습니다. 그러다보니 기능 위주로 코드를 작성하게 되었습니다. 병해도감 기능에서는 특정 작물의 병해 목록을 가져오고, 선택한 병해의 상세 정보를 보여주는 기능이 필요했습니다. 이를 위해 API를 두 번 호출해야 했는데 처음에는 병해 목록을 가져오기 위해, 두 번째는 선택한 병해의 상세 정보를 가져오기 위해 API를 호출했습니다. 이 과정에서 많은 고난이 있었지만, 문제를 해결하면서 API 호출과 데이터 처리에 대한 경험을 쌓을 수 있었습니다. 또한, 지도 마커 기능에서는 지도에 마커를 표시하고, 마커의 위치를 사용자가 수정할 수 있도록 구현했습니다. 수정된 위치의 주소를 역지오코딩하여 표시하는 과정에서 로직이 복잡해져서 많은 시간을 투자해야 했습니다. 하지만 이 과정을 통해 지도 API 사용에 대한 이해도를 높일 수 있었습니다. 프로젝트를 통해 많은 것을 배웠으며, 절 개발자로 이끌었던 프로젝트였습니다. 겪었던 어려움과 이를 해결한 경험은 저에게 큰 자산이 되었습니다."
    },
    {
      id: 2,
      title: "커리어허브",
      description: "구인 공고 공유 사이트 개발자들을 위한 취업정보(채용정보) 공유 사이트",
      link: "https://github.com/jaeminjeon123/CCC",
      image: `${process.env.PUBLIC_URL}/ccc.png`,
      retrospective: "제가 개발자로 진로를 결심하고 처음으로 진행한 프로젝트입니다. 순수 바닐라 JavaScript로 작성되었으며, 메인 페이지 개발을 맡았습니다. 기획이 러프하게 진행되면서 각 페이지 외에 필요한 기능이 점점 늘어나게 되었고, 그 기능들이 모두 제 페이지에 집중되었습니다. 특히, 뒤늦게 상태 관리를 진행하면서 많은 어려움을 겪었습니다. 상태 관리가 비동기로 처리된다는 사실을 알고 있었지만, 함수의 순서에 따라 코드 실행의 흐름과 결과에 큰 영향을 미칠 수 있다는 것을 이 프로젝트를 통해 깨닫게 되었습니다. 또한 제가 많은 기능을 담당하게 되면서 프론트엔드에 대한 자신감이 붙은 계기가 되었던 것 같습니다."
    },
    {
      id: 3,
      title: "TETRIST",
      description: "웹 socket과 react를 사용해서 구현한 1:1 레트로 감성의 대전 테트리스 게임",
      link: "https://github.com/sesac-laters-team/tetrist",
      image: `${process.env.PUBLIC_URL}/tetrist1.png`,
      retrospective: "처음 기획 당시, 팀원들 중 많은 이들이 웹소켓과 React를 이용해 개발을 하고 싶어했습니다. 그렇게 게임 개발에 초점이 맞춰졌고, 최종적으로 테트리스를 만들기로 결정했습니다. 게임 로직은 한 사람이 담당하게 되었고, 저는 간단한 기능들과 전체적인 CSS, 인터랙션에 집중하게 되었습니다. 특히 React에서 완벽한 반응형 디자인을 구현하기 위해 많은 노력을 기울였습니다. 이 프로젝트를 통해 CSS와 사용자 인터랙션 디자인에 대한 이해를 깊게 할 수 있었습니다. 이전에는 반응형 웹 디자인의 섬세한 구현 방법에 대해 잘 알지 못했지만, 이번 프로젝트를 통해 그 중요성과 구체적인 구현 방법을 배울 수 있었습니다."
    },
    {
      id: 4,
      title: "포트폴리오",
      description: "리액트로 만든 슴슴한 포트폴리오",
      link: "https://github.com/jaeminjeon123/jaeminjeon123-web",
      image: `${process.env.PUBLIC_URL}/por.png`,
      retrospective: "  이 프로젝트는 클론 코딩이나 팀 프로젝트가 아닌, 제 아이디어와 기획을 바탕으로 처음으로 혼자 완성한 프로젝트입니다. 다른 사람이 만든 템플릿을 사용하고 싶지 않아, 제가 추구하는 깔끔한 스타일을 반영한 저만의 포트폴리오를 만들고자 했습니다. 개발 과정에서 모바일에서는 클릭 이벤트를, 데스크탑에서는 호버 이벤트를 사용하여 사용자 경험을 향상시키는 데 중점을 두었습니다. 이 과정에서 이벤트 버블링 문제에 직면하게 되었고, 이를 해결하기 위해 e.preventDefault()와 e.stopPropagation()을 사용하여 상위 요소에 이벤트가 전파되지 않도록 하는 데 많은 노력을 기울였습니다. "
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
