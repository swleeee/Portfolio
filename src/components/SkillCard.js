import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
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
        <img src={src} />
        {/* <div>{name}</div> */}
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
  width: 300px;
  height: 220px;
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
  position: absolute;
  transition: 1s;
  top: 0;
  background-color: #fff;
  //   background-color: #dac3ac;
  //   background-color: #09ab99;
  text-align: center;
  height: inherit;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 7px;
  //   box-shadow: 0 6px 15px 1px rgba(0, 0, 0, 0.5);
  //   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  //   box-shadow: 0 1px 3px 0 rgb(0 0 0 / 40%);
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.16);
  backface-visibility: hidden;
  transform: rotateY(0deg);

  width: 100%;
  z-index: 1;

  transform: rotateY(0deg);
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
    width: 100%;
    // height: 150px;
    height: 75%;
  }

  > div {
    margin-top: 0;
    margin-bottom: 10px;
  }
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
  padding: 20px;
  box-sizing: border-box;
  //   opacity: 0;
  border-radius: 7px;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  overflow: hidden;

  //   &:hover {
  //     // top: 50%;
  //     opacity: 0.5;
  //     z-index: 2;
  //     transform: rotateY(-180deg);
  //   }
  div {
    // background-color: yellowgreen;

    padding: 5px 10px;
    // border-radius: 20px;

    word-break: break-all;
  }

  div:nth-of-type(1) {
    font-size: 20px;
    font-weight: bold;
    background-color: yellow;
    text-align: center;
    margin-bottom: 5px;
  }
  div:nth-of-type(2) {
    font-size: 13px;
    color: #fff;
    line-height: 1.5;
  }
`;
