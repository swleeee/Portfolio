import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Skill from './containers/skill';
import styled from 'styled-components';
import app from './App.css';

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Skill />
      <Footer>
        <a href="https://www.freepik.com/photos/technology">
          Technology photo created by pressfoto - www.freepik.com
        </a>
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
  // height: 100vh;
`;

const Footer = styled.div``;
