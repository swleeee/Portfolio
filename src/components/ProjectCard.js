import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Link as Connection,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const img_slide_settings = {
  //   dots: true, // 슬라이드 밑에 점 보이게
  //   infinite: true, // 무한으로 반복
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000, // 넘어가는 속도
  slidesToShow: 1, // 4장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '5px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  arrows: false,
};

function ProjectCard(props) {
  //   const items = props.item;
  //   const {name, content, src} = props.item;

  const { tag, name, description, content, func, tech, link, img_src } =
    props.item;
  const [Tooltip, setTooltip] = useState(-1);
  console.info(func);
  //   console.info(items);

  return (
    <OuterContainer>
      <Container>
        <Title>
          <div>
            <span>{name}</span>
            {/* <span> {tag}</span> */}
          </div>
          <div></div>
          <div></div>
          <div>{tag}</div>
        </Title>
        <Contents>
          <ImgBox>
            <SliderContainer {...img_slide_settings}>
              {img_src.map((src) => {
                return (
                  //   <div>
                  <img src={src} />
                  //   </div>
                );
              })}
            </SliderContainer>
            {/* <div>{name}</div> */}
          </ImgBox>
          <Content>
            {/* <Section>
              <Subject>인원</Subject>
              <SubContent>{tag}</SubContent>
            </Section> */}
            <Section>
              <Subject>주제</Subject>
              <SubContent>{description}</SubContent>
            </Section>
            <Section>
              <Subject>설명</Subject>
              <SubContent>{content}</SubContent>
            </Section>
            <Section>
              <Subject>기능</Subject>
              <FuncBox>
                {func &&
                  func.map((item, idx) => {
                    return (
                      <div
                        onMouseOver={() => {
                          //   console.info(idx);
                          setTooltip(idx);
                        }}
                        onMouseLeave={() => {
                          setTooltip(-1);
                        }}
                      >
                        <Front>{item.overview}</Front>
                        <Back active={Tooltip === idx}>
                          <div>{item.detail}</div>
                          <div></div>
                        </Back>
                      </div>
                    );
                  })}
              </FuncBox>
            </Section>

            <Section>
              {' '}
              <Subject>기술</Subject>
              <SubContent>{tech}</SubContent>
            </Section>
            <Section>
              {' '}
              <Subject>링크</Subject>
              <SubContent>
                {' '}
                <a href={link} target="_blank">
                  {link}
                </a>
              </SubContent>
            </Section>
          </Content>
        </Contents>
      </Container>
    </OuterContainer>
  );
}

export default ProjectCard;

const OuterContainer = styled.div`
  width: 100%;
  //   height: 100%;
  background-color: #e6f0ef;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  //   border: 1px solid red;
  // background-color: #ce8365;
  // background-color: #5972a4;
  background-color: #89a28a;

  cursor: pointer;
  width: 80%;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.8);
  // border: 3px solid #e6f0ef;
  border-radius: 5px;
  //   align-items: center;
  //   height: 220px;
  //   height: 100%;
  //   display: inline-flex;
  //   justify-content: space-between;
  //   position: relative;
  //   margin: 20px;
  //   align-self: center;

  &:hover > div:nth-of-type(1) {
    // top: -50%;
    // opacity: 0.5;
    // transform: rotateY(180deg);
  }
  &:hover > div:nth-of-type(2) {
    // top: 50%;
    // opacity: 0.5;
    // z-index: 2;
    // transform: rotateY(0deg);
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

const ImgBox = styled.div`
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  //   height: 300px;
  > img {
    width: inherit;
  }
`;

const Title = styled.div`
  position: relative;
  div:nth-of-type(1) {
    span:nth-of-type(1) {
      font-size: 40px;
      font-weight: 600;
      margin-right: 10px;
      font-family: SCDream5;
    }

    text-align: center;
    padding: 30px;
    box-sizing: border-box;
  }
  div:nth-of-type(2) {
    position: absolute;
    top: 0%;
    right: 0%;
    width: 0px;
    height: 0px;
    border-bottom: 70px solid #7f705e;
    border-right: 130px solid #e6f0ef;
    // -webkit-box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
    // -moz-box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
    // box-shadow: 2px 7px 7px rgba(0, 0, 0, 0.3);
    box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.22);
  }
  div:nth-of-type(3) {
    position: absolute;
    // top: 0;

    top: 30px;
    // left: 30px;
    // background-color: rgba(133, 133, 33, 0.8);
    // width: 130px;
    // height: 70px;

    border: 25px solid #4f4546;

    border-left: 0;
    border-right: 30px solid transparent;
    width: 150px;
  }
  div:nth-of-type(4) {
    position: absolute;
    top: 40px;
    left: 30px;
    color: #fff;
    font-family: SCDream3;
    // border: 1px solid rgba(0, 0, 0, 0.9);
    // border-radius: 10px;
  }
`;
const Contents = styled.div`
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
`;
const Content = styled.div`
  padding: 0 30px 15px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  margin: 10px 0;
  //   border: 2px solid red;
`;
const MainContent = styled.div``;
const FuncBox = styled.div`
  display: flex;
  > div {
    // width: 80px;
    // min-width: 80px;
    text-align: center;
    // width: 100%;
    height: 30px;
    padding: 3px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    box-sizing: border-box;
    // background-color: #c9bebb;
    // background-color: #ced9dc;
    background-color: #a97eaa;
    border-radius: 30px;
    font-size: 14px;
    position: relative;
    // color: #fff;
    font-family: SCDream3;
    &:hover {
      background-color: #6656a1;
      color: white;
    }
  }
`;
const Subject = styled.div`
  width: 80px;
  height: 30px;
  // background-color: #c9bebb;
  // background-color: #ced9dc;
  background-color: #6a796f;

  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 2px solid green;
  margin-right: 10px;
  font-size: 18px;
  font-family: SCDream5;
`;
const SubContent = styled.div`
  flex: 1;
  font-family: SCDream3;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Front = styled.div`
  //   border: 2px solid red;
`;
const Back = styled.div`
  //   border: 2px solid black;
  background-color: #dd9c62;

  position: absolute;
  bottom: 60px;
  right: 0;

  transform: translateX(30%);
  width: 200px;
  //   height: 230px;
  display: ${(props) => (props.active ? 'block' : 'none')};
  color: black;
  // border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  > div:nth-of-type(1) {
    word-break: break-all;
    // z-index: 200;
    // border: 2px solid red;
  }
  > div:nth-of-type(2) {
    position: absolute;
    // width: 30px;
    height: 30px;
    // border: 2px solid red;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 30px solid #dd9c62;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    // border-bottom: none;
    z-index: -1;
    // border: 2px solid red;
  }
`;

const Link = styled(Connection)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-family: RobotoBlack;
  //   margin-right: 72px;
  // width: 100%;
  font-weight: bold;
  // border: 3px solid red;
  width: 100%;
  box-sizing: border-box;
  display: block;
  // padding: 4px 8px;
  // margin: 0 auto;
  text-align: center;
  > span {
    font-family: GongGothicBold;
    font-size: 30px;
    font-weight: bold;
    // color: #eb7252;
    color: #000000;
  }
`;
const SliderContainer = styled(Slider)`
  width: 100%;
  overflow: hidden;
  > div:nth-of-type(1) {
    width: 100%;
    // width: 400px;
    height: 350px;
    // overflow: hidden;

    > div {
      position: absolute;
      box-sizing: border-box;
    }
  }

  .slick-dots {
    bottom: 10px;
  }
  img {
    max-width: 100%;
    // height: auto;
    display: block;
    // object-fit: fill;
    object-fit: contain;
    height: 360px;
  }
`;
