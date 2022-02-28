import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Hexagon from './Hexagon';
import hcj_img from '../images/skill/htmlcssjs.png';

function SkillCard(props) {
  //   const items = props.item;
  //   const {name, content, src} = props.item;

  const { name, content, src } = props.item;
  console.info(name);
  //   console.info(items);

  return (
    <Container>
      <Front>
        {/* <Hexagon src={src}> */}
        <img src={src} />
        {/* <div>{name}</div> */}
        {/* </Hexagon> */}
      </Front>
      <Back>
        <div>{name}</div>
        <div>{content}</div>
      </Back>
    </Container>
  );
}

export default SkillCard;

const Container = styled.div`
  cursor: pointer;
  width: 360px;
  height: 350px;
  display: inline-block;
  position: relative;
  margin: 20px;
  align-self: center;

  &:hover > div:nth-of-type(1) {
    transform: rotateY(180deg);
  }
  &:hover > div:nth-of-type(2) {
    transform: rotateY(0deg);
  }

  @media (min-width: 0px) and (max-width: 479.98px) {
    width: 80%;
    height: 280px;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    width: 320px;
    height: 300px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 300px;
    height: 280px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 345px;
    height: 325px;
  }
`;

const ani = keyframes`
    0%,
    100% {
      /* transform: scale(1); */
    }
    50% {
      transform: scale(1.2);
    }
  
`;

const Front = styled.div`
  // width: 300px;
  height: 320px;

  background-color: #5c5b81;

  position: absolute;
  transition: 1s;
  top: 0;
  text-align: center;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.16);
  backface-visibility: hidden;
  transform: rotateY(0deg);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

  width: 100%;
  z-index: 1;

  transform: rotateY(0deg);
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    object-fit: contain;
    // width: 300px;
    transform: scale(0.8);
    width: 100%;
    // height: 150px;
    height: 75%;
  }

  > div {
    margin-top: 0;
    margin-bottom: 10px;
  }

  @media (min-width: 0px) and (max-width: 479.98px) {
    height: 250px;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    height: 285px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 270px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    height: 300px;
  }
`;

const Back = styled.div`
  position: absolute;
  transition: 1s;
  top: 0;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.7);
  color: #000;
  height: inherit;

  padding: 40px;
  box-sizing: border-box;
  //   opacity: 0;
  border-radius: 7px;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  overflow: hidden;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    padding: 5px 10px;
    word-break: break-all;
  }

  div:nth-of-type(1) {
    font-size: 20px;
    font-weight: bold;
    background-color: yellow;
    text-align: center;
    margin-bottom: 5px;
    font-family: SCDream5;
  }
  div:nth-of-type(2) {
    font-size: 15px;
    color: #fff;
    line-height: 1.5;
    // font-family: SCDream1;
  }

  @media (min-width: 0px) and (max-width: 479.98px) {
    padding: 40px;
    div:nth-of-type(1) {
      font-size: 13px;
      margin-bottom: 5px;
    }
    div:nth-of-type(2) {
      font-size: 10px;
      line-height: 1.3;
    }
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    padding: 40px;
    div:nth-of-type(1) {
      font-size: 16px;
      margin-bottom: 5px;
    }
    div:nth-of-type(2) {
      font-size: 12px;
      line-height: 1.4;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 40px;
    div:nth-of-type(1) {
      font-size: 16px;
      margin-bottom: 5px;
    }
    div:nth-of-type(2) {
      font-size: 12px;
      line-height: 1.4;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 40px;
    div:nth-of-type(1) {
      font-size: 18px;
      margin-bottom: 5px;
    }
    div:nth-of-type(2) {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;
