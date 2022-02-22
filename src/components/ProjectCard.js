import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Link as Connection,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

function ProjectCard(props) {
  //   const items = props.item;
  //   const {name, content, src} = props.item;

  const { tag, name, description, content, func, tech, link, src } = props.item;
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
            <img src={src} />
            {/* <div>{name}</div> */}
          </ImgBox>
          <Content>
            <Section>
              <Subject>인원</Subject>
              <SubContent>{tag}</SubContent>
            </Section>
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
                      <div>
                        <Front
                          onMouseOver={() => {
                            //   console.info(idx);
                            setTooltip(idx);
                          }}
                          onMouseLeave={() => {
                            setTooltip(-1);
                          }}
                        >
                          {item.overview}
                        </Front>
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
  background-color: white;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  //   border: 1px solid red;
  background-color: #7f705e;
  cursor: pointer;
  width: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.8);
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
  width: 400px;
  height: 300px;
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
    }
    // span:nth-of-type(2) {
    //   border-radius: 50px;
    //   background-color: red;
    // }

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
    border-right: 130px solid white; /*Set to background color, not transparent!*/
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

    border: 25px solid #ddd4ae; /* All borders set */
    border-left: 0; /* Remove left border */
    border-right: 30px solid transparent; /* Right transparent */
    width: 100px;
  }
  div:nth-of-type(4) {
    position: absolute;
    top: 40px;
    left: 30px;
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
    height: 25px;
    padding: 3px 7px;
    margin: 0 7px;
    box-sizing: border-box;
    background-color: green;
    border-radius: 30px;
    font-size: 14px;
    position: relative;
    &:hover {
      background-color: blue;
    }
  }
`;
const Subject = styled.div`
  width: 80px;
  height: 25px;
  background-color: #bbb;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   border: 2px solid green;
  margin-right: 10px;
  font-size: 18px;
`;
const SubContent = styled.div`
  flex: 1;
  a {
    text-decoration: none;
  }
`;

const Front = styled.div`
  //   border: 2px solid red;
`;
const Back = styled.div`
  //   border: 2px solid black;
  background-color: yellow;

  position: absolute;
  bottom: 60px;
  right: 0;

  transform: translateX(30%);
  width: 200px;
  //   height: 230px;
  display: ${(props) => (props.active ? 'block' : 'none')};
  border: 1px solid;
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
    border-top: 30px solid yellow;
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
