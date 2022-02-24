import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import profile_img from '../images/about/profile.png';

function About() {
  return (
    <OuterContainer>
      <InnerContainer>
        <Title>
          <div>ABOUT</div>
        </Title>
        <Summary>
          <div>
            "새로운 것을 탐구하고 도전함으로써 더욱더 성장하는 개발자가
            되겠습니다."
          </div>
        </Summary>
        <Content>
          <ImageBox>
            <img src={profile_img} />
          </ImageBox>
          <TextBox>
            <div>
              아무것도 모른 채로 컴퓨터공학과를 지원했는데 프로그래밍 언어 교과
              수업을 들으면서 코드 작성의 즐거움을 느꼈으며 동아리에서 게임
              기획/개발, 데이터 처리 등 여러 활동을 하면서 다양한 경험을
              쌓았지만 앞으로 가야 할 길을 확실하게 정하지 못했습니다. 그러던 중
              장기현장실습 기회를 얻어 실무에서 프론트엔드 직무를 담당하게
              되었습니다. 이전 웹 프로그래밍 수업에서 내가 작성한 코드들이
              곧바로 화면에 나타나는 것이 신기해서 약간의 호기심을 가졌었는데
              실무에서 웹 사용자들이 우리 웹사이트를 이용하여 원하는 정보를 얻어
              가는 것을 보고 뿌듯함을 느꼈으며 더 나아가 어떻게 하면 사용자들이
              필요한 것을 빠르게 제공할 수 있을까에 대해 UX 적인 부분까지
              고려하는 저 자신을 보고 프론트엔드의 길을 걷기로 다짐했습니다.
              남들보다 늦게 출발했고 많이 부족하지만 끊임없이 빠르게 변화하는
              시대에 뒤떨어지지 않게 매일매일 성장하는 개발자가 되겠습니다 :)
            </div>
          </TextBox>
        </Content>
      </InnerContainer>
    </OuterContainer>
  );
}

export default About;

const OuterContainer = styled.div`
  //   background-color: #dac3ac;
  //   background-color: #746454;
  //   background-color: #7f705e;
  //   background-color: #6971fb;
  //   background-color: #0f147a;

  //   background-color: #fa8c00;
  background-color: #e6f0ef;
  //   background-color: #dfd6cf;

  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  padding: 100px 0;
  //   overflow: hidden;

  @media (min-width: 992px) and (max-width: 1299.98px) {
  }

  @media (min-width: 1300px) {
    width: 1300px;
  }
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: SB_L;

  //   border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  //   width: fit-content;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  //   width: 100%;
  //   color: #746454;
  padding-left: 20px;
  overflow: hidden;
  margin-bottom: 45px;
  div {
    // width: 100%;
    // text-align: center;
    // display: flex;
    display: inline-block;
    // justify-content: center;
    position: relative;
    // margin: 0 10px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 5px;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
      //   top: 0;
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
const Summary = styled.div`
  div {
    width: 100%;
    text-align: center;
    font-family: SCDream5;
    font-size: 32px;
    margin-bottom: 15px;
    // color: #a69777;
    color: green;
    font-weight: bold;
  }
`;
const Line = styled.div`
  width: 80%;
  height: 1px;
  //   color: #fff;
  border-top: 3px solid #fff;
`;
const Content = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
`;

const ImageBox = styled.div`
  width: 350px;
  height: 350px;
  border: 2px solid #a69777;
  // border-radius: 5px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 5;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextBox = styled.div`
  width: 50%;
  padding: 10px 15px;
  box-sizing: border-box;

  div {
    font-family: SCDream3;
    font-size: 16px;
    line-height: 1.8;
  }
`;
