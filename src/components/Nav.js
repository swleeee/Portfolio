import React, { Component } from 'react';
import styled from 'styled-components';

// class Nav extends Component {
//   render() {
//     return <div>ddd</div>;
//   }
// }

function Nav() {
  return (
    <Container>
      <Home>
        <div>SWLEE_PORTFOLIO</div>
      </Home>
      <MenuBox>
        <div>SKILLS</div>
        <div>PROJECT</div>
        <div>CONTACT</div>
      </MenuBox>
    </Container>
  );
}

export default Nav;

const Container = styled.div`
  //   background-color: #733c78;
  //   background-color: #746454;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }

  @media (min-width: 1300px) {
    width: 1300px;
  }
`;

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  //   background-color: skyblue;
  //   font-size: 30px;

  div {
    font-family: KOHIBOLD;
    // font-family: Hyemin_Bold;
    font-size: 30px;
  }
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 10px;
    font-family: Hyemin_Bold;
    font-size: 24px;
  }
`;
