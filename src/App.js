import React, { useRef } from 'react';
import styled from 'styled-components';
import app from './App.css';

// import Nav from './components/MobileNav';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './containers/About';
import Skill from './containers/Skill';
import Project from './containers/Project';
import Contact from './containers/Contact';

function App() {
  const scrollToRef = (ref) => {
    console.info(ref.current.offsetTop);
    window.scrollTo({ top: ref.current.offsetTop - 64, behavior: 'smooth' });
  };

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
      <Button onClick={scrollTo.toTop}>
        <div />
      </Button>
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

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  z-index: 888;
  border-radius: 50%;
  // background-color: #a69777;
  // background-color: #aaa;
  background-color: #52575c;
  // background-color: #8e8e90;

  // border: 1px solid black;
  border: none;
  box-shadow: -1px 3px 7px 1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    width: 0px;
    height: 0px;
    border-bottom: 16px solid black;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    // z-index: 889;
  }

  @media (min-width: 0px) and (max-width: 479.98px) {
    bottom: 12px;
    right: 12px;
    width: 28px;
    height: 28px;

    div {
      border-bottom: 8px solid black;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    bottom: 15px;
    right: 15px;
    width: 32px;
    height: 32px;

    div {
      border-bottom: 12px solid black;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    bottom: 20px;
    right: 20px;
    width: 42px;
    height: 42px;

    div {
      border-bottom: 14px solid black;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;

    div {
      border-bottom: 16px solid black;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }
  }
`;
