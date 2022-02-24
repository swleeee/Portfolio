import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import developer_img from '../images/working-code.jpg';

// const TypeingText = () => {
//   return <p className="text">{Text}</p>;
// };

function Banner() {
  const txt = '이상원 포트폴리오';
  const [Text, setText] = useState('');
  const [Line, setLine] = useState(false);
  const [Count, setCount] = useState(0);

  useEffect(() => {
    console.info('dd');
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 150);
    console.info(Text);
    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
      setTimeout(() => {
        setLine(true);
      }, 500);
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    <Container>
      <TextBox active={Line}>
        <div>
          <Name active={Line} className="text">
            {Text}
          </Name>
          {/* <Bar active={Line} /> */}
          <Description active={Line}>
            <p>
              안녕하세요. 사용자 면에서 최적의 서비스를 제공하기 위해 노력할
              것이며 새로운 것을 탐구하고 도전함으로써 더욱더 성장하는 개발자가
              되겠습니다.
            </p>
          </Description>
        </div>
      </TextBox>
      <ImageBox
      // style={{
      //   backgroundImage: `url(${developer_img})`,
      //   backgroundPosition: 'center center',
      //   backgroundSize: 'cover',
      // }}
      ></ImageBox>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;
const ImageBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  // > img {
  //   width: 100%;
  //   height: 600px;
  // }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  z-index: 2;

  // background-color: rgba(127, 114, 95, 0.65);
  background-color: #6d5b74;

  //   background: linear-gradient(180deg, rgba(150, 150, 150, 0.7), transparent);

  color: #fff;

  > div {
    height: 70%;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) =>
      props.active ? 'rgba(166,166,166,0.4)' : 'transparent'};
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
  font-size: 60px;
  z-index: 3;
  color: #fff;
  text-align: center;
  -webkit-transition: all 0.15s ease 0s;
  transform: ${(props) => props.active && 'translateY(-10px)'};
  font-family: KOHILIGHT;
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
  width: ${(props) => (props.active ? '85%' : '10%')};
  height: ${(props) => (props.active ? '50%' : '10%')};
  //   border: 2px solid #fff;
  border-top: ${(props) =>
    props.active ? '2px solid #fff' : '0px solid #fff'};
  border-left: ${(props) =>
    props.active ? '2px solid #fff' : '0px solid #fff'};
  border-right: ${(props) =>
    props.active ? '2px solid #fff' : '0px solid #fff'};
  border-bottom: ${(props) =>
    props.active ? '2px solid #fff' : '0px solid #fff'};
  border-radius: ${(props) => (props.active ? '5px' : '0px')};
  //   display: ${(props) => (props.active ? 'block' : 'none')};
  transition: width 1s ease 0s;
  //   transition: border 1s ease 0s;
  padding: 10px 10px;
  box-sizing: border-box;
  > p {
    // width: 0px;

    display: ${(props) => (props.active ? 'block' : 'none')};
    transition-delay: 1s;
    // opacity: ${(props) => (props.active ? '0.6' : '1')};
    animation: ${textFadeIn} 2s ease-in;
    font-size: 22px;
    word-break: keep-all;
  }
`;
