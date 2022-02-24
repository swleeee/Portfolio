import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// class Nav extends Component {
//   render() {
//     return <div>ddd</div>;
//   }
// }

function Nav(props) {
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  // const {
  //   scrollTo: { toTop, contact, projects, skills },
  // } = props;
  const scrollTo = props.scrollTo;

  function handleScroll() {
    // console.info(ScrollY);
    // console.info(ScrollActive);
    if (ScrollY > 90) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <OuterContainer active={ScrollActive}>
      <InnerContainer>
        <Home>
          <div onClick={scrollTo.toTop}>SWLEE_PORTFOLIO</div>
        </Home>
        <MenuBox>
          <div onClick={scrollTo.skills}>SKILLS</div>
          <div onClick={scrollTo.projects}>PROJECT</div>
          <div onClick={scrollTo.contact}>CONTACT</div>
        </MenuBox>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Nav;

const OuterContainer = styled.div`
  position: ${(props) => (props.active ? 'sticky' : 'static')};
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
  // background-color: white;
  // background-color: #9a86b3;
  background-color: ${(props) => (props.active ? 'white' : '#a69777')};
  // background-color: #6d5b74;
  border-bottom: ${(props) => (props.active ? '2px solid black' : 'none')};

  width: 100%;
`;
const InnerContainer = styled.div`
  //   background-color: #733c78;
  //   background-color: #746454;
  height: 100px;
  display: flex;
  justify-content: space-between;
  // border-bottom: 3px solid black;

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
    cursor: pointer;
  }
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 20px;
    font-family: Hyemin_Bold;
    font-size: 24px;
    cursor: pointer;
  }
`;
