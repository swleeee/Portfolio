import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import MobileMenuItem from './MobileMenuItem';

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
          <div onClick={scrollTo.toTop}>SWLEE</div>
        </Home>
        <MenuBox>
          <MenuItem onClick={scrollTo.about}>ABOUT</MenuItem>
          <MenuItem onClick={scrollTo.skills}>SKILLS</MenuItem>
          <MenuItem onClick={scrollTo.projects}>PROJECT</MenuItem>
          <MenuItem onClick={scrollTo.contact}>CONTACT</MenuItem>
        </MenuBox>

        <MobileMenuBox>
          <MobileMenuItem scrollTo={scrollTo} />
        </MobileMenuBox>
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

  @media (min-width: 0px) and (max-width: 767.98px) {
    width: calc(100% - 28px);
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 720px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 900px;
  }
  @media (min-width: 1300px) {
    width: 1200px;
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
    font-family: esm_bold;
    // font-family: Hyemin_Bold;
    font-size: 30px;
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    div {
      font-size: 26px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    div {
      font-size: 28px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    div {
      font-size: 29px;
    }
  }
`;
const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 0px) and (max-width: 767.98px) {
    display: none;
  }
`;

const MobileMenuBox = styled.div`
  display: none;
  @media (min-width: 0px) and (max-width: 767.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuItem = styled.div`
  margin: 0 20px;
  font-family: Hyemin_Bold;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #eab646;
  }

  @media (min-width: 0px) and (max-width: 767.98px) {
    margin: 0 12px;
    font-size: 20px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 0 16px;
    font-size: 22px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    margin: 0 18px;
    font-size: 23px;
  }
`;
