import React, { useRef } from 'react';
import styled from 'styled-components';
import app from './App.css';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Skill from './containers/skill';
import Project from './containers/project';
import Contact from './containers/contact';

function App() {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 64, behavior: 'smooth' });

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = {
    toTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),

    skills: () => scrollToRef(skillsRef),
    projects: () => scrollToRef(projectsRef),
    contact: () => scrollToRef(contactRef),
  };

  return (
    <Container>
      <Nav scrollTo={scrollTo} />
      <Banner />
      <RefBox ref={skillsRef}>
        <Skill ref={skillsRef} />
      </RefBox>
      <RefBox ref={projectsRef}>
        <Project />
      </RefBox>
      <RefBox ref={contactRef}>
        <Contact />
      </RefBox>
      <Footer>
        <a href="https://www.freepik.com/photos/technology">
          Technology photo created by pressfoto - www.freepik.com
        </a>
        <div>© 2022. Lee Sang Won. All rights reserved.</div>
      </Footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // background-color: green;

  width: 100%;
  // height: 100%;
  // height: 100vh;
`;

const RefBox = styled.div`
  width: 100%;
`;

const Footer = styled.div``;
