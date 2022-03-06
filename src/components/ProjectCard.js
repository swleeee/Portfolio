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
              <Subject>깃허브</Subject>
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
  background-color: #89a28a;
  width: 80%;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.8);
  // border: 3px solid #e6f0ef;
  border-radius: 5px;

  @media (min-width: 0px) and (max-width: 479.98px) {
    width: 90%;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 90%;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 90%;
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

  @media (min-width: 0px) and (max-width: 479.98px) {
    width: 100%;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    // width: 60%;
    width: 100%;
    img {
      // width: inherit;
      width: 180px;
      height: 180px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    // width: 60%;
    width: 100%;
    img {
      // width: inherit;
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 80%;
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

  @media (min-width: 0px) and (max-width: 479.98px) {
    div:nth-of-type(1) {
      span:nth-of-type(1) {
        font-size: 20px;
        margin-right: 0px;
      }
      padding: 10px;
    }
    div:nth-of-type(2) {
      border-bottom: 30px solid #7f705e;
      border-right: 50px solid #e6f0ef;
      box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.22);
    }
    div:nth-of-type(3) {
      top: 12px;
      border: 12px solid #4f4546;
      border-right: 20px solid transparent;
      width: 60px;
    }
    div:nth-of-type(4) {
      top: 17px;
      left: 5px;
      font-size: 10px;
    }
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    div:nth-of-type(1) {
      span:nth-of-type(1) {
        font-size: 28px;
        margin-right: 10px;
      }
      padding: 20px;
    }
    div:nth-of-type(2) {
      border-bottom: 55px solid #7f705e;
      border-right: 110px solid #e6f0ef;
      box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.22);
    }
    div:nth-of-type(3) {
      top: 20px;
      border: 20px solid #4f4546;
      border-right: 20px solid transparent;
      width: 90px;
    }
    div:nth-of-type(4) {
      top: 30px;
      left: 18px;
      font-size: 13px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    div:nth-of-type(1) {
      span:nth-of-type(1) {
        font-size: 32px;
        margin-right: 10px;
      }
      padding: 24px;
    }
    div:nth-of-type(2) {
      border-bottom: 55px solid #7f705e;
      border-right: 110px solid #e6f0ef;
      box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.22);
    }
    div:nth-of-type(3) {
      top: 24px;
      border: 24px solid #4f4546;
      border-right: 20px solid transparent;
      width: 100px;
    }
    div:nth-of-type(4) {
      top: 38px;
      left: 20px;
      font-size: 14px;
    }
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    div:nth-of-type(1) {
      span:nth-of-type(1) {
        font-size: 36px;
        margin-right: 10px;
      }
      padding: 27px;
    }
    div:nth-of-type(2) {
      border-bottom: 65px solid #7f705e;
      border-right: 120px solid #e6f0ef;
      box-shadow: -5px 7px 7px rgba(0, 0, 0, 0.22);
    }
    div:nth-of-type(3) {
      top: 27px;
      border: 25px solid #4f4546;
      border-right: 25px solid transparent;
      width: 130px;
    }
    div:nth-of-type(4) {
      top: 40px;
      left: 30px;
      font-size: 15px;
    }
  }
`;
const Contents = styled.div`
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  @media (min-width: 0px) and (max-width: 479.98px) {
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    padding: 0 15px;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 0 25px;
  }
`;
const Content = styled.div`
  padding: 0 30px 15px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 0px) and (max-width: 479.98px) {
    padding: 0 10px 5px 10px;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 0 15px 5px 15px;
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    padding: 0 20px 10px 20px;
  }
`;

const Section = styled.div`
  display: flex;
  margin: 10px 0;

  //   border: 2px solid red;
`;
const MainContent = styled.div``;
const FuncBox = styled.div`
  display: flex;
  @media (min-width: 0px) and (max-width: 479.98px) {
    flex-wrap: wrap;
  }

  > div {
    cursor: pointer;
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

    @media (min-width: 0px) and (max-width: 479.98px) {
      height: 20px;
      padding: 3px 7px;

      margin-right: 10px;

      border-radius: 30px;
      font-size: 11px;
      margin-bottom: 5px;
    }
    @media (min-width: 480px) and (max-width: 767.98px) {
      height: 24px;
      padding: 3px 7px;

      margin-right: 10px;

      border-radius: 30px;
      font-size: 12px;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
    }

    @media (min-width: 992px) and (max-width: 1299.98px) {
      height: 27px;
      padding: 3px 7px;

      margin-right: 10px;

      border-radius: 30px;
      font-size: 13px;
    }
  }
`;
const Subject = styled.div`
  width: 80px;
  height: 30px;
  background-color: #6a796f;

  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 18px;
  font-family: SCDream5;

  @media (min-width: 0px) and (max-width: 479.98px) {
    width: 50px;
    height: 20px;
    border-radius: 30px;
    margin-right: 5px;
    font-size: 13px;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    width: 65px;
    height: 24px;
    border-radius: 30px;
    margin-right: 10px;
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    width: 75px;
    height: 28px;

    border-radius: 30px;

    margin-right: 10px;
    font-size: 17px;
  }
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

  @media (min-width: 0px) and (max-width: 479.98px) {
    font-size: 11px;
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    font-size: 13px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    font-size: 15px;
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

  @media (min-width: 0px) and (max-width: 479.98px) {
    bottom: 45px;
    right: 0;

    transform: translateX(35%);
    width: 160px;
    border-radius: 5px;
    padding: 5px;
    > div:nth-of-type(1) {
      font-size: 11px;
    }
    > div:nth-of-type(2) {
      // width: 30px;
      height: 20px;
      bottom: -35px;
      border-top: 20px solid #dd9c62;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
    }
  }
  @media (min-width: 480px) and (max-width: 767.98px) {
    bottom: 60px;
    right: 0;

    transform: translateX(35%);
    width: 180px;
    border-radius: 5px;
    padding: 5px;
    > div:nth-of-type(1) {
      font-size: 12px;
    }
    > div:nth-of-type(2) {
      // width: 30px;
      height: 20px;
      bottom: -35px;
      border-top: 25px solid #dd9c62;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    bottom: 60px;
    right: 0;

    transform: translateX(30%);
    width: 200px;
    border-radius: 5px;
    padding: 5px;

    > div:nth-of-type(2) {
      // width: 30px;
      height: 30px;

      border-top: 30px solid #dd9c62;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
    }
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
