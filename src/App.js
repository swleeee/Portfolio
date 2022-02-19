import React from 'react';
import Nav from './components/Nav';
import styled from 'styled-components';
import app from './App.css';

function App() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  // background-color: green;

  width: 100%;
`;
