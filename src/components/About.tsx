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
          <p>대학 마지막 학기에 우연히 프론트엔드 개발을 접하게 되었고, 제가 만든 웹 페이지가 실제로 동작하는 것을 보면서 큰 흥미를 느꼈습니다. 이 경험은 개발자의 꿈을 꾸게 한 결정적인 계기가 되었습니다.</p>
          <p>프론트엔드 개발을 통해 사용자 경험을 개선하고, 창의적인 아이디어를 실현하는 과정에서 큰 만족감을 느낍니다. 특히, 사용자 인터페이스 디자인과 기능 구현을 통해 사용자와 직접 소통하는 느낌을 받을 때 가장 큰 보람을 느낍니다.</p>
          <p>제 강점은 빠른 피드백을 제공하고 좋은 결과를 향한 열망입니다. 사용자의 요구와 피드백을 신속하게 반영하여 개선하고, 항상 최상의 결과를 추구합니다. 이러한 강점을 바탕으로 사용자에게 더 나은 가치를 제공하기 위해 끊임없이 노력하고 있습니다.</p>
          <p>앞으로도 끊임없이 배우고 성장하며, 새로운 도전을 즐기며, 팀과 함께 협력하여 더 나은 결과를 만들어내는 것이 제 목표입니다. 이러한 목표를 향해 계속해서 나아가며, 항상 사용자 중심의 사고를 잊지 않을 것입니다.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
