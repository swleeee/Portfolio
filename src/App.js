import React from 'react';
import styled from 'styled-components';
import app from './App.css';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Skill from './containers/skill';
import Project from './containers/project';
import Contact from './containers/contact';

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Skill />
      <Project />
      <Contact />
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

const Footer = styled.div``;
