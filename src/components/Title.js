import React from 'react';
import styled from 'styled-components';

function Title(props) {
  return (
    <Item>
      <div>{props.word}</div>
    </Item>
  );
}

export default Title;

const Item = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: SB_L;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  overflow: hidden;
  margin-bottom: 45px;
  div {
    display: inline-block;
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 5px;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      width: 600px;
      top: 50%;
      transform: translateY(-50%);
    }
    &:before {
      right: 100%;
      margin-right: 15px;
    }
    &:after {
      left: 100%;
      margin-left: 15px;
    }
  }
`;
