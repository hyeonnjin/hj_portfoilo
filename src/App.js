import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="intro-section">
        <h1>안녕하세요, 저는 개발자입니다.</h1>
        <p>React와 CSS로 포트폴리오 웹사이트를 구축 중입니다.</p>
      </section>

      <section className="project-showcase container">
        <h2>프로젝트</h2>
        <ul>
          <li>
            <h2>프로젝트 1</h2>
            <p>React로 제작된 프로젝트입니다.</p>
          </li>
          <li>
            <h2>프로젝트 2</h2>
            <p>Vue.js를 사용한 웹 애플리케이션입니다.</p>
          </li>
        </ul>
      </section>

      <section className="skills-section container">
        <h2>기술 스택</h2>
        <ul>
          <li>React</li>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Python</li>
        </ul>
      </section>

      <section className="contact-details container">
        <h2>연락처</h2>
        <p>이메일: <a href="mailto:developer@example.com">developer@example.com</a></p>
        <p>GitHub: <a href="https://github.com/developer" target="_blank">github.com/developer</a></p>
      </section>
    </div>
  );
}

export default App;
