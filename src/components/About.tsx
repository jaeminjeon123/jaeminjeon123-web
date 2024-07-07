import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <section id='About'>
      <div className="container">
        <div className="profile-section">
          <h1 className="about-title">About Me</h1> {/* 제목을 섹션의 맨 위로 이동 */}
          <div className="profile-content">
            <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Profile" className="profile-image" />
            <div className="about-me">
              <p>무언가를 창조하고 싶다는 열망이 저를 프로그래밍의 세계로 이끌었습니다.</p>
              <div className="details">
                <p><strong>Name:</strong> 전재민</p>
                <p><strong>Address:</strong> 서울시 강서구</p>
                <p><strong>Email:</strong> ttll33333@naver.com</p>
                <p><strong>Phone:</strong> +82-10-4555-3910</p>
              </div>
            </div>
          </div>
        </div>
        <div className="additional-info">
          <p>대학 마지막 학기에 우연히 프론트엔드 개발을 접하면서, 제가 만든 웹 페이지가 실제로 동작하는 것을 보고 큰 흥미를 느꼈습니다. 특히 직접 구현한 기능들이 유기적으로 작동할 때 큰 성취감을 느꼈습니다. 프론트엔드 개발을 통해 사용자 경험을 개선하고, 창의적인 아이디어를 실현하는 과정에서 큰 만족감을 얻습니다.</p>
          <p>저의 강점은 빠른 피드백 제공과 최고의 결과를 향한 열망입니다. 사용자의 요구와 피드백을 신속하게 반영하여 개선하고, 항상 최상의 결과를 추구합니다. 이런 욕망때문에 자기 전에 더 나은 구조와 로직에 대해 고민하는 습관을 가지고 있습니다. 이러한 고민과 성찰이 저를 더 나은 개발자로 성장하게 합니다.</p>
          <p>앞으로도 끊임없이 배우고 성장하며, 새로운 도전을 즐기고, 팀과 협력하여 더 나은 결과를 만들어내는 것이 제 목표입니다. 이러한 목표를 향해 계속 나아가며, 항상 사용자 중심의 사고를 잊지 않겠습니다.</p>

        </div>
      </div>
    </section>
  );
}

export default About;
