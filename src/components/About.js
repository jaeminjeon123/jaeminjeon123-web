import React from 'react';
import './About.css';


function About() {
  return (
    <div className="container">
      <div className="profile-section">
      <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Profile" className="profile-image" />

        <div className="about-me">
          <h1>About Me</h1>
          <p>어렸을 때부터 무언가를 창조하고 싶다는 생각이 가득했지만, 손재주가 부족하다는 것을 느꼈습니다.</p>
          <p>이러한 창조에 대한 열망은 저를 프로그래밍의 세계로 이끌었습니다  </p>
          <div className="details">
            <p><strong>Name:</strong> 전재민</p>
            <p><strong>Address:</strong> 서울시 강서구</p>
            <p><strong>Email:</strong> ttll33333@naver.com</p>
            <p><strong>Phone:</strong> +82-10-4555-3910</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
