import React, { useRef } from 'react';
import styled from 'styled-components';
import app from './App.css';

import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './containers/About';
import Skill from './containers/Skill';
import Project from './containers/Project';
import Contact from './containers/Contact';

function App() {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 64, behavior: 'smooth' });

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = {
    toTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),

    about: () => scrollToRef(aboutRef),
    skills: () => scrollToRef(skillsRef),
    projects: () => scrollToRef(projectsRef),
    contact: () => scrollToRef(contactRef),
  };

  return (
    <Container>
      <Nav scrollTo={scrollTo} />
      <Banner />
      <RefBox ref={aboutRef}>
        <About />
      </RefBox>
      <RefBox ref={skillsRef}>
        <Skill />
      </RefBox>
      <RefBox ref={projectsRef}>
        <Project />
      </RefBox>
      <RefBox ref={contactRef}>
        <Contact />
      </RefBox>
      <Footer>
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
  z-index: 2;
`;

const Footer = styled.div``;
