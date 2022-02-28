import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    margin: auto;
    flex-flow: column nowrap;
    // background-color: #0d2538;
    background-color: #333;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    top: 0;
    right: 0;
    // height: 100vh;
    // width: 300px;
    width: 95vw;
    // height: 200px;
    padding-top: 3.5rem;
    padding-bottom: 1.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Item = styled.div`
  // padding: 18px 10px;
  margin: 18px 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    color: #fff;
    &:hover {
      color: #eab646;
    }
  }
`;

const MobileMenu = (props) => {
  const open = props.open;
  const scrollTo = props.scrollTo;
  const setOpen = props.setOpen;
  // console.info(scrollTo);
  function handler(e, type, setOpen) {
    // console.info(setOpen);
    console.info(type);
    setOpen(false);
    switch (type) {
      case 'about':
        console.info('about');
        e.about();
        break;
      case 'skills':
        e.skills();
        break;
      case 'projects':
        e.projects();
        break;
      case 'contact':
        e.contact();
        break;
      default:
        break;
    }
  }

  return (
    <Container open={open}>
      <Item onClick={() => handler(scrollTo, 'about', setOpen)}>ABOUT</Item>
      <Item onClick={() => handler(scrollTo, 'skills', setOpen)}>SKILLS</Item>
      <Item onClick={() => handler(scrollTo, 'projects', setOpen)}>
        PROJECT
      </Item>
      <Item onClick={() => handler(scrollTo, 'contact', setOpen)}>CONTACT</Item>
    </Container>
  );
};

export default MobileMenu;
