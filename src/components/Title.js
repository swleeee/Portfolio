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

  @media (min-width: 0px) and (max-width: 479.98px) {
    font-size: 30px;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    font-size: 36px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    font-size: 44px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 52px;
  }
`;
