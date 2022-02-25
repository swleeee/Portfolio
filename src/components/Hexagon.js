import React from 'react';
import styled, { keyframes } from 'styled-components';

function Hexagon(props) {
  return (
    <Item>
      <img src={props.src} />
    </Item>
  );
}

export default Hexagon;

const ani = keyframes`
    0%,
    100% {
      /* transform: scale(1); */
    }
    50% {
      transform: scale(1.2);
    }
  
`;

const Item = styled.div`
  //   width: 300px;
  height: 320px;
  //   width: 100%:
  //   height: 100%;

  //   position: relative;
  background: pink;

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
