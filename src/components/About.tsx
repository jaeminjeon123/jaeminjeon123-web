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
          <p>
            마지막 학기, 캡스톤 디자인 과제를 통해 우연히 프론트엔드 개발에 접하게 되었습니다. 제가 만든 페이지가 실제로 동작하는 것을 보고 큰 흥미를 느꼈으며, 이 경험이 개발자의 꿈을 꾸게 한 계기가 되었습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;