import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import developer_img from '../images/working-code.jpg';
import banner_img from '../images/banner1.png';

// const TypeingText = () => {
//   return <p className="text">{Text}</p>;
// };

function Banner() {
  const txt = 'NICE TO MEET YOU AND WELCOME!';
  const [Text, setText] = useState('');
  const [Line, setLine] = useState(false);
  const [Count, setCount] = useState(0);

  useEffect(() => {
    // console.info('dd');
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 150);
    // console.info(Text);
    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      setTimeout(() => {
        setLine(true);
      }, 250);
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    <Container>
      <TextBox active={Line}>
        {/* <div>
          <Name active={Line} className="text">
            {Text}
          </Name>
          
          <Description active={Line}>
            <p>
              안녕하세요. 사용자 면에서 최적의 서비스를 제공하기 위해 노력할
              것이며 새로운 것을 탐구하고 도전함으로써 더욱더 성장하는 개발자가
              되겠습니다.
            </p>
          </Description>
        </div> */}

        <div>
          <Name active={Line} className="text">
            {Text}
          </Name>

          <Description active={Line}>
            <p>저의 포트폴리오에 오신 것을 진심으로 환영합니다</p>
          </Description>
        </div>
        <div>
          <div className="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
      </TextBox>
      {/* <ImageBox
      style={{
        backgroundImage: `url(${developer_img})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
      >
        <img src={banner_img} />
      </ImageBox> */}
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
`;
const ImageBox = styled.div`
  position: absolute;
  top: 50%;
  // left: 50%;
  left: 5%;
  transform: translateY(-50%);
  // transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  // border: 2px solid red;
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

const move = keyframes`
  0%   { transform: scale(1)   translate(30vw, -30px); }  
  33%  { transform: scale(0.8, 1) translate(75vw, 30vh) rotate(160deg); }  
  66%  { transform: scale(1.3) translate(0vw, 45vh) rotate(-20deg); }
  100% { transform: scale(1)   translate(30vw, -30px); }
  
`;

const rotate = keyframes` 
  100% {
    transform: rotateY(360deg) rotateX(720deg) rotateZ(1080deg);
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  z-index: 2;

  // background-color: rgba(127, 114, 95, 0.65);
  // background-color: #6d5b74;
  background-color: #a69777;

  //   background: linear-gradient(180deg, rgba(150, 150, 150, 0.7), transparent);

  // color: #fff;

  > div:nth-of-type(1) {
    // height: 70%;
    // width: 600px;
    width: 90%;
    min-height: 550px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // transition: opacity 0s ease-out 0.29s, width 0.15s ease-out 0.3s;
    // opacity: ${(props) => (props.active ? '1.6' : '1')};
    // -webkit-transition: opacity 0.9s ease 0s;
    // transition: opacity 0.9s ease 0s;
    transition: background-color 0.9s ease 0s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  > div:nth-of-type(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    animation: ${move} 10s ease-in-out infinite;
    overflow: hidden;
    z-index: -1;
    .cube {
      animation: ${rotate} 8000ms linear infinite;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      width: 100px;
      height: 100px;
      margin: auto;
      position: absolute;
      transform-style: preserve-3d; //  perspective를 부모로부터 받아 자신을 통과해 자식까지 전달 (새로 나온듯)
    }
    .face {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
    }

    .front {
      background: #89a3d9;
      transform: translateZ(50px);
    }

    .back {
      background: #627fbd;
      transform: translateZ(-50px);
    }

    .left {
      background: #2a57a1;
      transform: translateX(-50px) rotateY(90deg);
    }

    .right {
      background: #12377b;
      transform: translateX(50px) rotateY(90deg);
    }

    .top {
      background: #394398;
      transform: translateY(-50px) rotateX(90deg);
    }

    .bottom {
      background: #2c2461;
      transform: translateY(50px) rotateX(90deg);
    }
  }
`;
const Bar = styled.div`
  width: 80%;
  height: 1px;
  //   color: #fff;
  border-top: 3px solid #fff;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;
const Name = styled.div`
  width: 85%;
  // height: 200px;
  font-size: 80px;
  z-index: 3;
  // color: #fff;
  // color: #f0fd5b;

  // color: #7c9181;
  // color: #997976;
  text-align: center;
  -webkit-transition: all 0.15s ease 0s;
  transform: ${(props) => props.active && 'translateY(-10px)'};
  font-family: SB_B;
`;

const textFadeIn = keyframes`
0% {
  opacity: 0;
//   display: none;
}

100% {
  opacity: 1;
//   display: block;
}
`;

const Description = styled.div`
  //   width: 80%;
  // width: ${(props) => (props.active ? '85%' : '10%')};
  // height: ${(props) => (props.active ? '50%' : '10%')};
  //   border: 2px solid #fff;
  text-align: center;
  // color: #fff;

  //   display: ${(props) => (props.active ? 'block' : 'none')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  // transition: width 1s ease 0s;
  transition: opacity 0.3s ease 0s;
  //   transition: border 1s ease 0s;
  padding: 10px 10px;
  box-sizing: border-box;
  > p {
    // width: 0px;

    // display: ${(props) => (props.active ? 'block' : 'none')};
    transition-delay: 1s;
    opacity: ${(props) => (props.active ? '1' : '0')};
    // visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    animation: ${textFadeIn} 2s ease-in;
    font-size: 22px;
    word-break: keep-all;
    font-weight: bold;
    font-family: SCDream5;
  }
`;
