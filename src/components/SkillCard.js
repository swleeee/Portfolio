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
  // width: 100%;
  // height: 100%;
  display: inline-block;
  //   justify-content: space-between;
  position: relative;
  margin: 20px;
  align-self: center;

  &:hover > div:nth-of-type(1) {
    // top: -50%;
    // opacity: 0.5;
    transform: rotateY(180deg);
  }
  &:hover > div:nth-of-type(2) {
    // top: 50%;
    // opacity: 0.5;
    // z-index: 2;
    transform: rotateY(0deg);
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
  //   width: 300px;
  height: 320px;
  //   width: 100%:
  //   height: 100%;

  //   position: relative;
  background-color: #5c5b81;

  position: absolute;
  transition: 1s;
  top: 0;
  //   background-color: #fff;
  //   background-color: #dac3ac;
  //   background-color: #09ab99;
  text-align: center;
  //   height: inherit;
  padding: 15px;
  box-sizing: border-box;
  //   border-radius: 7px;
  //   box-shadow: 0 6px 15px 1px rgba(0, 0, 0, 0.5);
  //   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  //   box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
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

  &:hover img {
    // animation: ${ani} 1.2s linear infinite;
  }

  //   &:hover {
  //     transform: rotateY(180deg);
  //     // color: red;
  //   }

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

  //   &:before {
  //     content: '';
  //     position: absolute;
  //     top: -25px;
  //     left: 0;
  //     width: 0;
  //     height: 0;
  //     border-left: 100px solid transparent;
  //     border-right: 100px solid transparent;
  //     border-bottom: 25px solid pink;
  //   }
  //   &:after {
  //     content: '';
  //     position: absolute;
  //     bottom: -25px;
  //     left: 0;
  //     width: 0;
  //     height: 0;
  //     border-left: 100px solid transparent;
  //     border-right: 100px solid transparent;
  //     border-top: 25px solid pink;
  //   }
`;

const Back = styled.div`
  position: absolute;
  transition: 1s;
  top: 0;
  width: 100%;
  //   background-color: #ccc;
  background-color: rgba(0, 0, 0, 0.7);
  color: #000;
  height: inherit;
  //   text-align: center;
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
`;
